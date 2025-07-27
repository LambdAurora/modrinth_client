import { FILE_TYPES_MAP } from "../lib/constants.ts";
import { ModrinthClient } from "../lib/index.ts";
import { parse_manifest } from "./manifest.ts";
import core from "@actions/core";
import * as path from "@std/path";

const GH_INPUTS: Record<string, string> = (() => {
	const raw = Deno.env.get("GH_INPUTS");
	if (!raw) {
		core.error("No GitHub inputs has been specified.");
		Deno.exit(1);
	}

	return JSON.parse(raw);
})();

const inputs = {
	token: GH_INPUTS.token!,
	project: GH_INPUTS.project!,
	manifest: GH_INPUTS.manifest!,
	readme_file: GH_INPUTS.readme_file,
};

core.info("Reading files…");
const manifest = parse_manifest(await Deno.readTextFile(inputs.manifest));

const files = await Promise.all(manifest.files.map(async (file_path) => {
	const type = FILE_TYPES_MAP[path.extname(file_path)];

	if (/^https?:\/\//.test(file_path)) {
		const url = new URL(file_path);
		const res = await fetch(url);
		const data = await res.blob();

		return new File([data], path.basename(url.pathname), { type: data.type });
	} else {
		const data = await Deno.readFile(file_path);
		return new File([data], path.basename(file_path), { type });
	}
}));

const readme = await (async () => {
	if (inputs.readme_file) {
		try {
			return await Deno.readTextFile(inputs.readme_file);
		} catch (e) {
			core.error(`Failed to parse readme file "${inputs.readme_file}".`);
			if (e instanceof Error) {
				core.error(e);
			}
			Deno.exit(2);
		}
	} else {
		return null;
	}
})();

const client = new ModrinthClient(inputs.token);

const result = await client.create_version({
	project_id: inputs.project,
	version_number: manifest.version,
	name: manifest.name,
	version_type: manifest.type,
	changelog: manifest.changelog,
}, files);

if (result.status === "error") {
	core.setFailed(`Failed to upload version, Modrinth API returned error status ${result.status} (${result.reason}): ${result.data}`);
	Deno.exit(3);
}

core.setOutput("version-id", result.data.id);
core.info(`\x1b[32m✔\x1b[0m Successfully uploaded version on Modrinth.\n\tID: ${result.data.id}`);

if (readme) {
	await client.update_project_body(inputs.project, readme);

	core.info("\x1b[32m✔\x1b[0m Successfully updated project body on Modrinth.");
}

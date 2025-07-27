import { VERSION_TYPES, VersionType } from "../lib/enum.ts";

export interface ActionManifest {
	readonly version: string;
	readonly name: string;
	readonly type: VersionType;
	readonly changelog: string;
	readonly game_versions?: readonly string[];
	readonly loaders: readonly string[];
	readonly files: readonly string[];
}

export function parse_manifest(manifest: string): ActionManifest {
	const raw = JSON.parse(manifest);

	if (!raw.version) {
		throw new Error("Failed to parse action manifest: missing or malformed version.");
	}

	if (!raw.name) {
		throw new Error("Failed to parse action manifest: missing or malformed version name.");
	}

	if (!Array.isArray(raw.files)) {
		throw new Error("Failed to parse action manifest: missing or malformed files.");
	}

	if (!raw.type) {
		raw.type = "release";
	} else if (!VERSION_TYPES.includes(raw.type)) {
		throw new Error(`Failed to parse action manifest: malformed version type, valid values are ${VERSION_TYPES.join(", ")}.`);
	}

	if (!raw.loaders) {
		raw.loaders = ["minecraft"];
	} else if (typeof raw.loaders === "string") {
		raw.loaders = [raw.loaders];
	} else if (!Array.isArray(raw.loaders)) {
		throw new Error(`Failed to parse action manifest: malformed loaders array.`);
	}

	return raw;
}

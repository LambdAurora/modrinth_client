import { DependencyType, VERSION_TYPES, VersionType } from "../lib/enum.ts";

export interface Dependency {
	readonly type: DependencyType;
	readonly project_id: string;
}

export interface ActionManifest {
	readonly version: string;
	readonly name: string;
	readonly type: VersionType;
	readonly changelog: string;
	readonly feature: boolean;
	readonly game_versions?: readonly string[];
	readonly loaders: readonly string[];
	readonly dependencies: readonly Dependency[];
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

	if (typeof raw.featured !== "boolean") {
		raw.featured = false;
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

	if (!raw.dependencies) {
		raw.dependencies = [];
	} else if (!Array.isArray(raw.dependencies)) {
		throw new Error(`Failed to parse action manifest: malformed dependencies array.`);
	} else {
		raw.dependencies = (raw.dependencies as unknown[]).map((dependency, index) => {
			if (typeof dependency !== "object") {
				throw new Error(`Failed to parse action manifest: dependency at index ${index} is malformed.`);
			} else {
				return dependency as Dependency;
			}
		});
	}

	return raw;
}

import { DependencyType, VersionType } from "./enum.ts";

interface VersionDependencyBase {
	readonly dependency_type: DependencyType;
	readonly file_name?: string;
}

export type VersionDependency =
	& VersionDependencyBase
	& ({ readonly version_id: string; readonly project_id?: string } | {
		readonly version_id?: string;
		readonly project_id: string;
	});

export interface CreateVersion {
	readonly name: string;
	readonly version_number: string;
	readonly project_id: string;
	readonly version_type?: VersionType;
	readonly changelog?: string;
	readonly game_versions?: readonly string[];
	readonly loaders?: readonly string[];
	readonly dependencies?: readonly VersionDependency[];
	readonly featured?: boolean;
}

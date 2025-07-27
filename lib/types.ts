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
	/**
	 * The name of the version to create.
	 */
	readonly name: string;
	/**
	 * The version number of the version to create.
	 */
	readonly version_number: string;
	/**
	 * The project identifier for which the version is for.
	 */
	readonly project_id: string;
	/**
	 * The version type.
	 */
	readonly version_type?: VersionType;
	readonly changelog?: string;
	readonly game_versions?: readonly string[];
	readonly loaders?: readonly string[];
	readonly dependencies?: readonly VersionDependency[];
	readonly featured: boolean;
}

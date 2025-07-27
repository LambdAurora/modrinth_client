export type VersionType = "release" | "beta" | "alpha";
export const VERSION_TYPES: readonly VersionType[] = Object.freeze([
	"release",
	"beta",
	"alpha",
]);

export type DependencyType =
	| "required"
	| "optional"
	| "incompatible"
	| "embedded";
export const DEPENDENCY_TYPES: readonly DependencyType[] = Object.freeze([
	"required",
	"optional",
	"incompatible",
	"embedded",
]);

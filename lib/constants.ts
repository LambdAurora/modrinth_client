export const API_ROOT_URL = "https://api.modrinth.com/v2";

export const FILE_TYPES_MAP: Readonly<Record<string, string>> = Object.freeze({
	".mrpack": "application/x-modrinth-modpack+zip",
	".jar": "application/java-archive",
	".zip": "application/zip",
});

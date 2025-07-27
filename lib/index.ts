import { API_ROOT_URL } from "./constants.ts";
import { CreateVersion } from "./types.ts";

export interface Success<T> {
	readonly status: "success";
	readonly data: T;
}

export interface Failure {
	readonly status: "error";
	readonly code: number;
	readonly reason: string;
	readonly data: string;
}

export class ModrinthClient {
	private readonly headers: HeadersInit;

	constructor(private readonly token: string) {
		this.headers = {
			"User-Agent": "github.com:LambdAurora/modrinth_client",
			Authorization: this.token,
		};
	}

	public async create_version(data: CreateVersion, file_parts: File[]): Promise<Success<{ id: string }> | Failure> {
		const url = `${API_ROOT_URL}/version`;

		const form_data = new FormData();
		form_data.set("data", JSON.stringify({ ...data, file_parts: file_parts.map((file) => file.name) }));
		file_parts.forEach((file) => form_data.set(file.name, file, file.name));

		const response = await fetch(url, {
			method: "POST",
			headers: this.headers,
			body: form_data,
		});
		const body = await response.text();
		const parsed_body = JSON.parse(body);

		if (!response.ok) {
			return { status: "error", code: response.status, reason: response.statusText, data: JSON.stringify(parsed_body, null, "\t") };
		}

		return {
			status: "success",
			data: parsed_body,
		};
	}

	public async update_project_body(project_id: string, body: string) {
		const url = `${API_ROOT_URL}/project/${project_id}`;

		const response = await fetch(url, {
			method: "PATCH",
			headers: {
				...this.headers,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ body }),
		});

		if (!response.ok) {
			throw new Error(`Failed to update body of project ${project_id}: ${response.status} (${response.statusText})`);
		}
	}
}

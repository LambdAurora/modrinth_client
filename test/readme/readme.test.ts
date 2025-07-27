import { assertEquals } from "jsr:@std/assert";
import { process_readme } from "../../lib/readme_processor.ts";

Deno.test({
	name: "Test Modrinth project README processor",
	async fn() {
		const input = await Deno.readTextFile(`${import.meta.dirname}/README.TEST.MD`);
		const expected = await Deno.readTextFile(`${import.meta.dirname}/README.EXPECTED.MD`);

		assertEquals(process_readme(input), expected);
	},
});

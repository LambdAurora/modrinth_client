export function process_readme(readme: string) {
	return readme.replace(/<!-- *modrinth_exclude\.(long_)?start *-->(?:.|\s)*?<!-- *modrinth_exclude\.(long_)?end *-->/g, "")
		.replace("<!-- modrinth_only.start ", "")
		.replace(" modrinth_only.end -->", "");
}

FROM denoland/deno:latest
WORKDIR /action
COPY deno.* .
RUN deno install
COPY . .
ENTRYPOINT ["deno", "run", "--allow-read", "--allow-write", "--allow-net", "--allow-env=GH_INPUTS,NODE_V8_COVERAGE,JEST_WORKER_ID,GITHUB_OUTPUT", "/action/actions/index.ts"]
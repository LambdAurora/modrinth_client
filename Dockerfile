FROM denoland/deno:latest
WORKDIR /action
COPY . .
RUN deno install
RUN deno check
RUN deno task test
ENTRYPOINT ["deno", "run", "--allow-read", "--allow-net", "--allow-env=GH_INPUTS,NODE_V8_COVERAGE,JEST_WORKER_ID", "/action/actions/index.ts"]
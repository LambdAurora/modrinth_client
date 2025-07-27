FROM denoland/deno:latest
WORKDIR /action
COPY . .
RUN deno install
RUN deno check
RUN deno task test
ENTRYPOINT ["deno", "task", "actions"]
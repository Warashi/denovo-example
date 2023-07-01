import { Denovo } from "https://deno.land/x/denovo_core@v0.0.1/mod.ts";

export async function main(denovo: Denovo): Promise<void> {
  const result = await denovo.eval("echo hello world");
  console.log(result.trim());
  denovo.dispatcher = {
    // deno-lint-ignore require-await
    async echo(...args: unknown[]): Promise<unknown[]> {
      return args;
    },
  };
}

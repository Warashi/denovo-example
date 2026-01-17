import { type Entrypoint } from "@warashi/denovo-core";

export const main: Entrypoint = (denovo) => {
  denovo.dispatcher = {
    echo: async (...args: unknown[]): Promise<unknown[]> => {
      await denovo.call("eval", "echo hello from dispatcher");
      return args;
    },
  };
};

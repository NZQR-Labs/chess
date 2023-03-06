import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const chessRouter = createTRPCRouter({
  getSecretMessage: protectedProcedure.query(({ctx}) => {
    const {db} = ctx;
    return 0;
  }),
});

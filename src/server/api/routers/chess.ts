import { z } from "zod";
import { Configuration, OpenAIApi } from "openai";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const chessRouter = createTRPCRouter({
  getSecretMessage: protectedProcedure.query(({ctx}) => {
    const {db} = ctx;
    return 0;
  }),
  getChatGptMove: protectedProcedure
    .input(z.object({query: z.string()}))
    .query(async ({ctx}) => {
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Hello world",
      }); 
      return completion.data.choices[0]?.text; 
    })  
});

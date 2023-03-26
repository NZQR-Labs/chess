import { z } from "zod";
import { Configuration, OpenAIApi } from "openai";
import axios, {type AxiosRequestConfig} from "axios";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
import { type ChessPuzzlesApiResponse, type ResponseType, type Puzzle } from "~/types";

const {RAPIDAPI_KEY} = process.env; 

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
    }),
  generatePuzzle: protectedProcedure
    .input(z.object({query: z.string()}))
    .query(async ({ctx}) => {

      const options: AxiosRequestConfig = {
        method: "GET",
        url: "https://chess-puzzles.p.rapidapi.com/",
        params: {
          themes: "[\"middlegame\",\"advantage\"]",
          rating: "1500",
          themesType: "ALL",
          playerMoves: "4",
          count: "1"
        },
        headers: {
          "X-RapidAPI-Key": RAPIDAPI_KEY!,
          "X-RapidAPI-Host": "chess-puzzles.p.rapidapi.com"
        }
      };
      try {
        const apiResults = await axios(options);
        if(apiResults.status === 200 && apiResults.data) {
          const chessPuzzelResults = apiResults.data as ChessPuzzlesApiResponse;
          const newResponse: ResponseType<Puzzle | undefined> = {
            error: false,
            success: true,
            message: "Successfully retrieved chess puzzle",
            data: chessPuzzelResults.puzzles[0]
          };
          return newResponse;
        } else {
          const newResponse: ResponseType<null> = {
            error: true,
            success: false,
            message: "Error retrieving chess puzzle",
            data: null
          };
          return newResponse;
        }
      } catch (error) {
        const newResponse: ResponseType<null> = {
          error: true,
          success: false,
          message: "Error retrieving chess puzzle",
          data: null
        };
        return newResponse;
      }
    }),
});

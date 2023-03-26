import type { NextApiRequest, NextApiResponse } from "next";
import axios, {type AxiosRequestConfig} from "axios";
import { type ChessPuzzlesApiResponse, type ResponseType, type Puzzle } from "~/types";
import { doc, setDoc } from "firebase/firestore";
import {firestore} from "../../../firebase-web/firebase";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const {RAPIDAPI_KEY} = process.env; 

dayjs.extend(utc);
dayjs.extend(timezone);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Running daily chess cron job");
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
      console.log(newResponse);
      const date = dayjs().tz("America/Los_Angeles").format("YYYY-MM-DD");
      const docRef = doc(firestore, "puzzles", date);
      await setDoc(docRef, chessPuzzelResults.puzzles[0]);
    } else {
      const newResponse: ResponseType<null> = {
        error: true,
        success: false,
        message: "Error retrieving chess puzzle from api.",
        data: null
      }; 
      console.log(newResponse);
    }
  } catch (error) {
    const newResponse: ResponseType<null> = {
      error: true,
      success: false,
      message: "Error retrieving chess puzzle, internal server error.",
      data: null
    }; 
    console.log(newResponse);
  }
  res.status(200).end("Cron Completed!");
}
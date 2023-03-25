import {TRPCError} from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
import { type User } from "~/types/firebase";
import { type ResponseType } from "~/types";

export const usersRouter = createTRPCRouter({
  userProfile: protectedProcedure.query(({ctx}) => {
    const {user} = ctx;
    if (!user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to access this route",
      });
    }
    
    const profile = {
      name: user.name,
      email: user.email,
    };
    
    return profile; 
  }),
  setUsernameAndEmail: protectedProcedure
    .input(z.object({
      username: z.string(),
      email: z.string()
    }))
    .mutation(async ({ctx, input}) => {
      const {username, email} = input; 
      const {user, db} = ctx;
      if(!username || !email || email === "" || username === "") {
        const newResponse: ResponseType = {
          error: true, 
          success: false, 
          message: "No username or email provided, or they are too short.",
          data: null
        };
        return newResponse; 
      }
      try {
        const docRef =  await db.collection("users").doc(user.id).get();
        const curUser = docRef.data() as User; 
        curUser.email = email; 
        curUser.name = username; 
        await db.collection("users").doc(user.id).set(curUser); 
        const newResponse: ResponseType = {
          error: false, 
          success: true, 
          data: curUser,
          message: "User updated succesfully!"
        };
        return newResponse; 
      }
      catch (e) {
        const newResponse: ResponseType = {
          success: false,
          error: false, 
          data: null, 
          message: "Could not update username or email."
        }; 
        return newResponse; 
      }
    }),
});

import {TRPCError} from "@trpc/server";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

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
});

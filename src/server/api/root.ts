import { createTRPCRouter } from "~/server/api/trpc";
import { questRouter } from "./routers/quest";
import { solutionRouter } from "./routers/solution";
import { userRouter } from "./routers/user";
import { workspaceRouter } from "./routers/workspace";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  quest: questRouter,
  solution: solutionRouter,
  workspace: workspaceRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

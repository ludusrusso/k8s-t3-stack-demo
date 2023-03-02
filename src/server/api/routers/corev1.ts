import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const k8sRouter = createTRPCRouter({
  getPods: protectedProcedure
    .input(z.object({ namespace: z.string().default("default") }))
    .query(async ({ input, ctx }) => {
      try {
        const res = await ctx.k8sCli.coreV1.listCoreV1NamespacedPod(
          input.namespace
        );
        return res.body.items;
      } catch (e) {
        console.error(e);
        throw e;
      }
    }),
  getDeployments: protectedProcedure
    .input(z.object({ namespace: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const res = await ctx.k8sCli.appsV1.listAppsV1NamespacedDeployment(
          input.namespace
        );
        return res.body.items;
      } catch (e) {
        console.error(e);
        throw e;
      }
    }),
});

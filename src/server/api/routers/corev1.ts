import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const k8sRouter = createTRPCRouter({
  getPods: protectedProcedure
    .input(z.object({ namespace: z.string() }))
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
  deletePod: protectedProcedure
    .input(z.object({ namespace: z.string(), name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.k8sCli.coreV1.deleteCoreV1NamespacedPod(
          input.name,
          input.namespace
        );
        return true;
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
  scaleDeployment: protectedProcedure
    .input(
      z.object({
        namespace: z.string(),
        name: z.string(),
        replicas: z.number().min(0).max(10),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.k8sCli.appsV1.replaceAppsV1NamespacedDeploymentScale(
          input.name,
          input.namespace,
          {
            metadata: {
              name: input.name,
              namespace: input.namespace,
            },
            spec: {
              replicas: input.replicas,
            },
          }
        );
        return true;
      } catch (e) {
        console.error(e);
        throw e;
      }
    }),
  deleteDeployment: protectedProcedure
    .input(
      z.object({
        namespace: z.string(),
        name: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.k8sCli.appsV1.deleteAppsV1CollectionNamespacedDeployment(
          input.name,
          input.namespace
        );
        return true;
      } catch (e) {
        console.error(e);
        throw e;
      }
    }),
});

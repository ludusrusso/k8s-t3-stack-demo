"use client";

import { createReactCli, reactApi } from "@/utils/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { Suspense, useEffect, useState, type FC, type ReactNode } from "react";
import { DialogProvider } from "./dialog";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => createReactCli());
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status !== "authenticated") {
    return <Loading />;
  }

  return (
    <reactApi.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div>
          <Suspense
            fallback={
              <div className="grid h-full w-full text-center">
                <button className="loading btn-ghost btn"></button>
              </div>
            }
          >
            <div>{children}</div>
          </Suspense>
        </div>
        <DialogProvider />
      </QueryClientProvider>
    </reactApi.Provider>
  );
};

const BaseLayout: FC<{ children: ReactNode }> = (props) => {
  return (
    <SessionProvider>
      <Layout {...props}></Layout>
    </SessionProvider>
  );
};

export default BaseLayout;

const Loading = () => (
  <div className="grid h-full w-full text-center">
    <button className="loading btn-ghost btn"></button>
  </div>
);

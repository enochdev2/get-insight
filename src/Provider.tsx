"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import * as React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default Provider;

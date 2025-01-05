"use client";

import * as React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Provider({
  children,
  ...props
}: {
  children: React.ReactNode; // Explicitly typing children
  [key: string]: any; // Optional: if you expect additional props
}) {
  return (
    <SessionProvider>
      <NextThemesProvider {...props} defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </SessionProvider>
  );
}
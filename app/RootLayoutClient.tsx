"use client";

import { ReactNode, useEffect, useState } from "react";
import { Provider } from "@/provider";
import GlobalContext from "@/context";

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsHydrated(true); // Indicate that the client has hydrated
    setIsDark(true); // Or fetch theme preference from a context/localStorage
  }, []);

  if (!isHydrated) {
    // Avoid rendering during the server-to-client hydration phase
    return null;
  }

  return (
    <Provider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      className={isDark ? "dark" : "light"}
      style={{ colorScheme: isDark ? "dark" : "light" }}
    >
      <GlobalContext>{children}</GlobalContext>
    </Provider>
  );
}
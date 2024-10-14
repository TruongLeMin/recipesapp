// components/SessionProviderWrapper.js
"use client"; // This makes the component a Client Component

import { SessionProvider } from "next-auth/react";

export default function SessionProviderWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

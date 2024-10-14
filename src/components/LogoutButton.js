// components/LogoutButton.js
"use client";

import { signOut } from "next-auth/react";
import { Button } from "@mui/material";

export default function LogoutButton() {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => signOut()}  // This triggers sign-out
    >
      Logout
    </Button>
  );
}

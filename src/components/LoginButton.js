// components/LoginButton.js
"use client";

import { signIn } from "next-auth/react";
import { Button } from "@mui/material";

export default function LoginButton() {
  return (
    <Button
      variant="contained"
      color="error" // Set Google button color to red
      onClick={() => signIn("google")} // This triggers Google sign-in
    >
      Login with Google
    </Button>
  );
}

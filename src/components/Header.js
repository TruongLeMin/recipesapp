"use client";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" passHref>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Recipe App
          </Typography>
        </Link>
        <Link href="/recipe-list" passHref>
          <Button color="inherit">Recipes</Button>
        </Link>
        <Link href="/about" passHref>
          <Button color="inherit">About</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button color="inherit">Contact</Button>
        </Link>
        {session ? (
          <>
            <Typography variant="body1" sx={{ margin: "0 10px" }}>
              Welcome, {session.user.name}
            </Typography>
            <Button color="inherit" onClick={() => signOut()}>
              Logout
            </Button>
          </>
        ) : (
          <Link href="/login" passHref>
            <Button color="inherit">Login</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { signIn } from "next-auth/react"; // Import signIn from next-auth/react
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement your custom login logic here
    console.log("Logging in with:", { username, password });
  };

  const handleGoogleLogin = async () => {
    const result = await signIn("google", { redirect: false }); // Set redirect to false
    if (result?.error) {
      console.error("Error logging in with Google:", result.error);
    } else {
      // Redirect to home after successful login
      router.push("/"); // Navigate to the home page
    }
  };

  const handleGithubLogin = () => {
    signIn("github"); // This triggers the GitHub login flow
  };

  return (
    <div>
      <Header />
      <Container maxWidth="xs" sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleGoogleLogin}
            sx={{
              mb: 1,
              backgroundColor: "red",
              color: "white",
              "&:hover": {
                backgroundColor: "darkred",
              },
            }}
          >
            Login with Google
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={handleGithubLogin}
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "gray",
              },
            }}
          >
            Login with GitHub
          </Button>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

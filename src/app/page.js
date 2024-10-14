
import { Container, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 8, mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Recipe App
        </Typography>
        <Typography variant="h5" paragraph>
          Discover delicious recipes from all over the world. Whether you're a beginner or a pro in the kitchen, we have something for everyone.
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Link href="/recipe-list" passHref>
            <Button variant="contained" color="primary" size="large">
              Explore Recipes
            </Button>
          </Link>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

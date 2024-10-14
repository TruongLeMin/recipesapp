
import { Container, Typography, Box, List, ListItem } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Our Recipe App
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to the Recipe App, your go-to destination for discovering
          delicious dishes from around the world. Whether you are a beginner
          cook or a culinary expert, we have a variety of recipes to inspire you
          in the kitchen.
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            We believe that food brings people together, and our goal is to help
            you create memorable meals with ease. From local cuisines to
            international flavors, explore a wide range of recipes and cooking
            tips.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Popular Dishes
          </Typography>
          <List>
            {["Spaghetti Carbonara", "Chicken Biryani", "Sushi Rolls", "Margherita Pizza", "Beef Tacos"].map((dish) => (
              <ListItem key={dish}>
                <Typography variant="body1">{dish}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

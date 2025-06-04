import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #1976d2, #42a5f5)",
        color: "white",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Bienvenue sur <span style={{ color: "#ffd600" }}>FlatziStore</span>
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          La meilleure boutique en ligne pour tous vos besoins tech
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/products"
          sx={{
            backgroundColor: "#ffd600",
            color: "#000",
            fontWeight: "bold",
            px: 4,
            "&:hover": {
              backgroundColor: "#ffca28",
            },
          }}
        >
          Voir nos produits
        </Button>
      </Container>
    </Box>
  );
}

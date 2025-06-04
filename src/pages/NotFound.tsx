import { Typography, Box, Button } from "@mui/material";

const NotFound = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h4">404</Typography>
      <Typography>Page non trouvée</Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/products")}
        startIcon={<ArrowBack />}
      >
        Retour aux produits
      </Button>
    </Box>
  );
};

export default NotFound;

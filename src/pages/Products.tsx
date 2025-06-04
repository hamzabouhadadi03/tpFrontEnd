import { useEffect, useState } from "react";
import api from "../services/api";
import {
  Box,
  Typography,
  Grid,
  Container,
  CircularProgress,
} from "@mui/material";
import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/products?limit=10&offset=0").then((res) => {
      setProducts(res.data);
      console.log("Produits chargés:", res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Box sx={{ bgcolor: "#f0f2f5", minHeight: "100vh", py: 10 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "start", mb: 5, color: "#333" }}
        >
          🛍️ Produits Vedettes
        </Typography>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
            <CircularProgress size={50} />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

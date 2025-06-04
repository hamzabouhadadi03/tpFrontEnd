import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  Button,
  CircularProgress,
  Chip,
  Grid,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { ArrowBack, ShoppingCart, Favorite } from "@mui/icons-material";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category?: {
    id: number;
    name: string;
  };
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (!id) return;

    api
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement du produit:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: "#f0f2f5",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (!product) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: "#f0f2f5",
        }}
      >
        <Typography variant="h4" color="error" gutterBottom>
          Produit non trouvé
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/products")}
          startIcon={<ArrowBack />}
        >
          Retour aux produits
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#f0f2f5", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link
            color="inherit"
            onClick={() => navigate("/products")}
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Produits
          </Link>
          <Typography color="text.primary">{product.title}</Typography>
        </Breadcrumbs>

        {/* Bouton Retour */}
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/products")}
          sx={{ mb: 3 }}
          variant="outlined"
        >
          Retour aux produits
        </Button>

        {/* Contenu principal en deux colonnes côte à côte */}
        <Grid container spacing={4} sx={{ flexWrap: "nowrap" }}>
          {/* Images à gauche */}
          <Grid item md={6} sx={{ flex: 1 }}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", mb: 2 }}>
              <CardMedia
                component="img"
                height="400"
                image={product.images[selectedImage] || product.images[0]}
                alt={product.title}
                sx={{ objectFit: "cover" }}
              />
            </Card>

            {/* Miniatures */}
            {product.images.length > 1 && (
              <Grid container spacing={1}>
                {product.images.slice(0, 4).map((image, index) => (
                  <Grid item xs={3} key={index}>
                    <Card
                      sx={{
                        cursor: "pointer",
                        border: selectedImage === index ? 2 : 0,
                        borderColor: "primary.main",
                        borderRadius: 2,
                        overflow: "hidden",
                        "&:hover": { opacity: 0.8 },
                      }}
                      onClick={() => setSelectedImage(index)}
                    >
                      <CardMedia
                        component="img"
                        height="80"
                        image={image}
                        alt={`${product.title} ${index + 1}`}
                        sx={{ objectFit: "cover" }}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>

          {/* Détails du produit à droite */}
          <Grid item md={6} sx={{ flex: 1 }}>
            <Box sx={{ p: 2 }}>
              {product.category && (
                <Chip
                  label={product.category.name}
                  color="primary"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              )}

              <Typography variant="h3" fontWeight="bold" gutterBottom>
                {product.title}
              </Typography>

              <Typography
                variant="h4"
                color="primary"
                fontWeight="bold"
                sx={{ mb: 3 }}
              >
                {product.price} €
              </Typography>

              <Typography
                variant="h6"
                gutterBottom
                fontWeight="medium"
                color="text.secondary"
              >
                Description
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  lineHeight: 1.7,
                  color: "text.secondary",
                }}
              >
                {product.description}
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCart />}
                  sx={{
                    minWidth: 200,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                >
                  Ajouter au panier
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Favorite />}
                  sx={{
                    minWidth: 150,
                    py: 1.5,
                  }}
                >
                  Favoris
                </Button>
              </Box>

              <Box
                sx={{
                  mt: 4,
                  p: 2,
                  bgcolor: "background.paper",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Informations produit
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • Livraison gratuite à partir de 50€
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • Retour gratuit sous 30 jours
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • Garantie fabricant 2 ans
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

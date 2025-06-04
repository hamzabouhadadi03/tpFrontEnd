// src/components/ProductCard.tsx
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};

type Props = {
  product: Product;
};

// src/components/ProductCard.tsx
const ProductCard = ({ product }: Props) => {
    return (
      <Card sx={{ 
        height: "100%", 
        display: "flex", 
        flexDirection: "column",
        alignItems: 'flex-start', // Alignement à gauche
        textAlign: 'left' // Texte aligné à gauche
      }}>
        <CardMedia
          component="img"
          height="200" // Hauteur augmentée
          image={product.images[0] || "https://via.placeholder.com/300"}
          alt={product.title}
          sx={{ width: '100%' }}
        />
        <CardContent sx={{ 
          flexGrow: 1,
          textAlign: 'left',
          width: '100%'
        }}>
          <Typography gutterBottom variant="h6" component="h3">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {product.description.substring(0, 80)}... {/* Description légèrement plus longue */}
          </Typography>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
            {product.price} €
          </Typography>
        </CardContent>
        <Button
          component={Link}
          to={`/products/${product.id}`}
          variant="outlined"
          size="medium"
          sx={{ 
            m: 2,
            alignSelf: 'flex-start' // Bouton aligné à gauche
          }}
        >
          Voir détails
        </Button>
      </Card>
    );
};


export default ProductCard;

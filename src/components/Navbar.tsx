import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        width: '100%', // Ajuste pour la sidebar
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            FlatziStore
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/products">
          Produits
        </Button>
        <Button color="inherit" component={Link} to="/users">
          Utilisateurs
        </Button>
        <Button color="inherit" onClick={logout}>
          Déconnexion
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  ShoppingCart as ProductsIcon,
  People as UsersIcon,
  Home as HomeIcon,
} from "@mui/icons-material";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          position: "fixed", // Fixe la sidebar
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>
        <ListItem button component={Link} to="/products">
          <ListItemIcon>
            <ProductsIcon />
          </ListItemIcon>
          <ListItemText primary="Produits" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemIcon>
            <UsersIcon />
          </ListItemIcon>
          <ListItemText primary="Utilisateurs" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

// src/components/UserCard.tsx
import { Card, CardContent, Typography, Avatar } from "@mui/material";

type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role?: string;
};

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 6,
        },
      }}
    >
      <Avatar
        src={user.avatar}
        alt={user.name}
        sx={{
          width: 80,
          height: 80,
          mx: "auto",
          mb: 2,
          boxShadow: 2,
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
        <Typography
          variant="caption"
          color="primary"
          fontWeight="medium"
          display="block"
          mt={1}
        >
          {user.role || "customer"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;

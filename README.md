🛒 FlatziStore - Documentation du projet

📦 Fonctionnalités

Ce projet est une application web de boutique en ligne développée avec React et TypeScript, utilisant React Router, Axios, MUI (Material UI) et un backend existant (API Flatstore simulée).

🔧 Installation

1. Installer les dépendances
    npm install
2. Lancer le projet en développement
    npm run dev

L'application sera accessible à l'adresse : http://localhost:5173.

🧩 Pages et Composants Développés

✅ Page de connexion (/login)

Formulaire de connexion

"email": "john@mail.com"
"password": "changeme"

Stockage du token et informations utilisateur (y compris rôle)

Redirection après connexion

📋 Listing des produits (/products)

Appel à l'API pour récupérer tous les produits

Affichage responsive avec MUI

Bouton pour voir le détail d’un produit

📦 Détail d’un produit (/products/:id)

Affichage complet du produit : image, titre, description, prix, catégorie

Gestion des miniatures (images cliquables)

Boutons "Ajouter au panier" et "Favoris"

✅ Loading state (indicateur de chargement)

✅ Gestion des erreurs si produit introuvable

👤 Liste des utilisateurs (/users)

Appel API pour récupérer les utilisateurs

🔁 Navigation (Navbar)

Affichée uniquement si utilisateur authentifié

Boutons conditionnels : "Utilisateurs", "Produits", "Déconnexion"

🚫 Page 404 (*)

Page NotFound pour toutes les routes non existantes

🔐 Authentification

Auth via une requête POST /auth/login

Récupération des données de l’utilisateur via /auth/profile

Stockage du token et de l'utilisateur dans localStorage

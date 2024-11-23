const express = require('express');  // Importation d'Express
const cors = require('cors');  // Ajout de CORS pour permettre les requêtes inter-domaines
const { swaggerUi, specs } = require('./swagger/swagger');  // Swagger config

const app = express();

// Middleware pour parser les requêtes en JSON
app.use(express.json());

// Middleware pour CORS
app.use(cors());

// Utilisation des routes pour les utilisateurs
const userRoutes = require('./routes/userRoutes');  // Routes des utilisateurs
app.use('/api/users', userRoutes);  // Toutes les routes concernant les utilisateurs

// Utilisation des routes pour l'authentification
const userAuth = require('./routes/auth');  // Routes d'authentification
app.use('/api/auth', userAuth);  // Routes d'authentification

// Configuration de Swagger pour afficher la documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


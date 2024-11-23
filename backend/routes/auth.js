// routes/auth.js
const express = require('express');
const { register, login, validateInput } = require('../controllers/authController'); // Importer les fonctions du contrôleur
const router = express.Router();

// Route d'inscription
router.post('/register', validateInput, register);

// Route de connexion
router.post('/login', validateInput, login);

module.exports = router;

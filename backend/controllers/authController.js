// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models'); // Utilisation de Sequelize pour importer le modèle User

// Clé secrète pour JWT
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware pour valider les entrées utilisateur
function validateInput(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  if (password.length < 7) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }
  next();
}

// Inscription d'un utilisateur
async function register(req, res) {
  try {
    const { username, password, firstName, lastName, email } = req.body;

    // Vérifie si l'utilisateur existe déjà
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Vérifie si l'email existe déjà
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hashage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const user = await User.create({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      email,
    });

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
}

// Connexion d'un utilisateur
async function login(req, res) {
  try {
    const { username, password } = req.body;

    // Vérifie si l'utilisateur existe
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Vérifie le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Génération du token JWT
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
}

module.exports = {
  register,
  login,
  validateInput,
};

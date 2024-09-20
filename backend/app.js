const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' })); 
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); 
app.use(express.static('public'));

// Conexão com o MongoDB
const mongoURI = "mongodb+srv://Carla:sua_senha@starwars.uyi85.mongodb.net/?retryWrites=true&w=majority&appName=StarWars"; // Insira sua senha
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Rotas
const StarwarsRoutes = require('./routes/StarRoutes');
app.use('/api/Starwars', StarwarsRoutes);

// Porta
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

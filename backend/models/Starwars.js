const mongoose = require('mongoose');

const StarWarsSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    description: { type: String, required: true },
    Director: { type: String, required: true },
    Year: { type: Number, required: true },
    Imagem_Url: { type: String, required: true }, 
    Trailer: { type: String, required: true }
});


module.exports = mongoose.model('Starwars', StarWarsSchema);

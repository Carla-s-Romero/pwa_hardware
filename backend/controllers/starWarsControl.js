const Filme = require('../models/Starwars');

exports.getAllStarwars = async (req, res) => {
    try {
        const Starwars = await Filme.find(); // Certifique-se de que 'Filme' é o modelo correto
        res.json(Starwars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.createFilm = async (req, res) => {
    const { Title, Description, Director, Year, Imagem_Url, Trailer } = req.body;
    const newFilm = new Filme({ Title, Description, Director, Year, Imagem_Url, Trailer });

    try {
        const savedFilm = await newFilm.save();
        res.status(201).json(savedFilm);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateFilm = async (req, res) => {
    try {
        const updatedFilm = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedFilm);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteFilm = async (req, res) => {
    try {
        await Filme.findByIdAndDelete(req.params.id);
        res.json({ message: 'Film deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

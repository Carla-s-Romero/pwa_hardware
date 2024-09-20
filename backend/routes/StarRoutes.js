const express = require('express');
const router = express.Router();
const starWarsControl = require('../controllers/starWarsControl');

router.get('/', starWarsControl.getAllStarwars);
router.post('/', starWarsControl.createFilm);
router.put('/:id', starWarsControl.updateFilm);
router.delete('/:id', starWarsControl.deleteFilm);

module.exports = router;





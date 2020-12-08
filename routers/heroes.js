const express=require('express');
const controladorHeroes = require('../controllers/heroesController');
const router=express.Router();
router.get('/bio/:id/:ok?',controladorHeroes.bio);
router.get('/detalle/:id',controladorHeroes.detalle);
router.get('/',controladorHeroes.heroes);





module.exports=router;
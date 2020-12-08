const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync( './data/heroes.json', 'utf-8'));  
const controladorHeroes={
      heroes: (req,res) => {
        res.send(heroes);
    },
      detalle: (req,res) => {
        let heroe = heroes.filter(function(hero){
            return hero.id==req.params.id;
        })
        if(heroe[0]===undefined){
            res.send('Heroe no encontrado')
        }else{
            res.send(`Hola mi nombre es ${heroe[0].nombre} y soy ${heroe[0].profesion}`);
        }
    },
      bio:(req,res) => {
        let heroe = heroes.filter(function(hero){
            return hero.id==req.params.id;
        });
       if(heroe[0]==undefined){
           console.log("No encotramos el heroe para mostrar su biografia");
       }else if(req.params.ok){
           res.send(`
           Heroe:${heroe[0].nombre}.\n Reseña:${heroe[0].resenia}`)
        }else{
            res.send(`${heroe[0].nombre} dice: Lamento que no quieras saber mas de mi, ni modo :)`);
        }
    }
}
module.exports= controladorHeroes;
// Require de Express
const express = require('express');

// Require de FS
//const fs = require('fs');
//const router = require('./routers/heroes');

// Ejecución de Express
const app = express();
const routerHeroes=require('./routers/heroes');
const routerMain=require('./routers/main');

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
//const  heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));
// Ruta Raíz / ➝ Home
app.use('/bio/:id/:ok?',routerHeroes);
app.use('/detalle/:id',routerHeroes);
app.use('/heroes',routerHeroes);
app.use('/',routerMain);




/* // Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.use(routerHeroes);

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:id', (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.filter(function(){
		return heroe.id==req.params.id;
	})
	if(heroe[0]==undefined){
		res.send('Heroe no encontrado')
	}else{
		res.send(`Hola mi nombre es ${heroe[0].name} y soy ${heroe[0].profesion}`);
	}
	
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?', (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.filter(function(hero){
		return hero.id=req.params.id;
	});
   if(heroe[0]==undefined){
	   console.log("No encotramos el heroe para mostrar su biografia");
   }else if(req.params.ok){
	   res.send(`
	   Heroe:${heroe[0].nombre}.\n Reseña:${heroe[0].resenia}`)
	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	}else{
		res.send(`${heroe[0].nombre} dice: Lamento que no quieras saber mas de mi hdp :)`);
	}
});
  */
// Ruta Créditos
// ¿?
app.get('/creditos',function(req,res){
	res.send('Creditos Kevin Aviles....a huevo!');
})
// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
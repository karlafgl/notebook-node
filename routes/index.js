module.exports = (app) => {
   let entries = [];
   app.locals.entries = entries; //las entradas se guardaran en la memoria local del servidor

   app.get('/',(req, res) => {
      res.render('index', {
         title: 'Home'
      });
   });

   app.get('/new-entry',(req, res) => {
      res.render('new-entry', {
         title: 'New Entry'
      });
   });

   app.post('/new-entry', (req, res) => {
      if (!req.body.title || !req.body.body) {
         res.send(400).send('Entradas deben tener un título y un cuerpo');
      }
      //vamos a guardar las entradas en un arreglo
      let newEntry = {
         title: req.body.title,
         content: req.body.body,
         published: new Date()

      }
      //estas entradas se guardaran en la memoria de nuestro servidor--- pero podrias usar una base de datos
      entries.push(newEntry);
      //una vez se guardo el objeto en el array de la memoria del servidor, redijiremos a inicio
      res.redirect('/');
   });
}

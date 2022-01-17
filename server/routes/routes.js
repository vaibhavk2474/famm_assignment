const productsRoutes = require('./products');

const appRouter = (app, fs) => {


  app.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });

  productsRoutes(app, fs);
};

module.exports= appRouter;
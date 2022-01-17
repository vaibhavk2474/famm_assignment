const productsRoutes = (app, fs) => {

    const dataPath = "./data/products.json";
  
    // reading data
    app.get('/products', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });


    });
  };
  
  module.exports = productsRoutes;
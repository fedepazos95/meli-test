const axios = require('axios');
const _ = require('lodash');

module.exports = app => {
  app.get('/api/items', (req, res) => {
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
      .then(response => {
        const category = _.maxBy(
          response.data.available_filters[0].values,
          o => {
            return o.results;
          }
        );
        res.send({
          author: {
            name: "Federico",
            lastname: "Pazos"
          },
          categories: category,
          items: response.data.results.slice(0,4).map(i => {
            return {
              id: i.id,
              title: i.title,
              price: i.price,
              picture: i.thumbnail,
              condition: i.condition,
              free_shipping: i.shipping.free_shipping
            }
          })
        })
      })
      .catch(error => {
        console.log(error);
      });
  });
};

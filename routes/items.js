const axios = require("axios");
const utils = require("../utils");

module.exports = app => {
  app.get("/api/items", (req, res) => {
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
      .then(response => {
        res.send(utils.formatSearchReponse(response));
      })
      .catch(error => {
        console.log(error);
      });
  });

  app.get("/api/items/:id", (req, res) => {
    axios
      .all([
        axios.get(`https://api.mercadolibre.com/items/${req.params.id}`),
        axios.get(
          `https://api.mercadolibre.com/items/${req.params.id}/description`
        )
      ])
      .then(
        axios.spread((itemRes, descriptionRes) => {
          res.send(
            utils.formatItemAndDescriptionResponse(itemRes, descriptionRes)
          );
        })
      );
  });
};

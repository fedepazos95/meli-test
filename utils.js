const _ = require("lodash");
var utils = (module.exports = {});

utils.formatSearchReponse = response => {
  const categories = _.find(response.data.available_filters, (c) => {
    return c.id === 'category';
  });
  const category = (categories) 
    ? _.maxBy(categories.values, o => { return o.results; }) 
    : { name: 'Todos los resultados'};
  return {
    author: {
      name: "Federico",
      lastname: "Pazos"
    },
    categories: category,
    items: response.data.results.slice(0, 4).map(i => {
      return {
        id: i.id,
        title: i.title,
        price: i.price,
        picture: i.thumbnail,
        condition: i.condition,
        free_shipping: i.shipping.free_shipping
      };
    })
  };
};

utils.formatItemAndDescriptionResponse = (item, desc) => {
  return {
    author: {
      name: "Federico",
      lastname: "Pazos"
    },
    item: {
      id: item.data.id,
      title: item.data.title,
      price: {
        currency: item.data.currency_id,
        amount: item.data.price
      },
      picture: item.data.pictures[0].url,
      condition: item.data.condition,
      free_shipping: item.data.shipping.free_shipping,
      sold_quantity: item.data.sold_quantity,
      description: desc.data.plain_text
    }
  };
};

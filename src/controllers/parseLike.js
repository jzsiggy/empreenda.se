const { User , Startup } = require('../models');

const parseLike = (request, response, next) => {
  console.log(request.body);
  
};

module.exports = parseLike;
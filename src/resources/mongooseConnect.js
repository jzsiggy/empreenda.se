const mongoose = require('mongoose');

const mongooseConnect = () => {
  mongoose
  .connect('mongodb://localhost/empreenda', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to Mongo")
  })
  .catch((err) => {
    console.log("Error trying to connect to Mongo", err)
  });
};

module.exports = mongooseConnect;
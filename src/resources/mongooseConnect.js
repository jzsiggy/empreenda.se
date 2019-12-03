const mongoose = require('mongoose');

const mongooseConnect = () => {
  mongoose
  .connect('mongodb+srv://Empreenda:empreenda@empreendase-kx7zu.gcp.mongodb.net/test?retryWrites=true&w=majority', {
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
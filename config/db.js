const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(
  config.MONGO_MLAB_URL,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  },
  err => {
    if (err) {
      console.log(err.errmsg + " Please check MONGO_URL in config.json");
      process.exit(1);
    }
    console.log("Successfully connected to DB");
  }
);
mongoose.Promise = global.Promise;

module.exports = {
  User: require("../models/user")
};

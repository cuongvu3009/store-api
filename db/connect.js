const mongoose = require("mongoose");

const connectDB = async (url) => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });
  console.log(`DB connected!`);
};

module.exports = connectDB;

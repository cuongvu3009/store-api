require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const productData = require("./products.json");

const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(productData);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

populate();

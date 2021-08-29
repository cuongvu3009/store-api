const express = require("express");
const app = express();
require("dotenv").config();

const products = require("./routes/products");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//  route
app.use("/api/v1/products", products);

app.use("/", (req, res) => {
  res.send("Hello world");
});

//  middleware
app.use(express.json());
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

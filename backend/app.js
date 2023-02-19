require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const express = require("express");
const connectDB = require("./database/connectDB");
const cookieParser=require('cookie-parser');
const app = express();
app.use(express.json());

app.use(cors());
const port = process.env.PORT || 3500;

const authRoute = require("./routes/auth.route");
const contentRoute=require("./routes/content.route");
const userRoute=require('./routes/user.routes')
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/content", contentRoute);
app.use("/api/v1/user", userRoute);
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const notFound = require("./errors/not-found");
app.use(cookieParser());
app.use(errorHandlerMiddleware);
app.use(notFound);

const start = async () => {
  try {
    // connect DB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();

require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const express = require("express");
const connectDB = require("./database/connectDB");
const app = express();
app.use(express.json());

app.use(cors());
const port = process.env.PORT || 3500;

const authRoute = require("./routes/auth.route");
<<<<<<< HEAD
const contentRoute = require("./routes/content.route");
const userRoute = require("./routes/user.routes");
=======
const contentRoute=require("./routes/content.route");
const suggestionRoute=require('./routes/suggestion.routes');
const analysisRoute=require('./routes/analysis.routes');
const fakeAIRoute=require('./routes/fakeAI.routes')
const userRoute=require('./routes/user.routes')
>>>>>>> c35fd033a8a07de94636fca72d48fe4fd5bc26f1
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/content", contentRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/suggestion", suggestionRoute);
app.use("/api/v1/analysis", analysisRoute);
app.use("/api/v1/fake", fakeAIRoute);
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const notFound = require("./errors/not-found");
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

const express = require("express");
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/users";
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});
app.use(express.json());
const userRouter = require("./routers/users");
app.use("/user", userRouter);
const kycRouter = require("./routers/kycRouters");
app.use("/kyc", kycRouter);
app.listen(9000, () => {
  console.log("Server started 9000");
});

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require("cors");
const path = require('path');
const userRoute = require("./route/router")
const connectDB = require('./database/connection');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config({
  path: path.join(__dirname, ".env"),
});

connectDB()
// // log requests
// app.use(morgan('tiny'));

// set view engine
// app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// // load assets
// app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
// app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


app.use("/users", userRoute);


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server started at port: " + PORT);
});
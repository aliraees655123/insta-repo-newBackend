const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const adminRouter = require('./routes/AdminRoutes')

app.use(express.json());
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/photo", express.static("upload"));

app.use("/admin",adminRouter);




//////////
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });
  app.use(
    cors({
      origin: "*",
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );
  app.options(
    "*",
    cors({
      origin: "*",
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );

  app.set('view engine', 'ejs');
app.use(expressLayouts);
  ///////////


mongoose.set("strictQuery", false);

mongoose
  .connect('mongodb+srv://zee:zee@cluster0.fq5tead.mongodb.net/turnaudio?retryWrites=true&w=majority')
  .then((response) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
    console.log("Database is not connected");
  });



app.listen(6002,()=>{
    console.log(`listening on port 5000`);
  
  })
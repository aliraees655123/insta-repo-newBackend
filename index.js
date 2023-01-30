const express = require("express");
const bodyParser=require("body-parser")
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path')

const app = express();

const adminRouter = require('./routes/AdminRoutes')

app.use(express.json());
// const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/photo", express.static("upload"));

app.use("/admin",adminRouter);

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true, parameterLimit: 50000 }));


// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//////////
// app.use(function (err, req, res, next) {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === "development" ? err : {};
  
   
//     res.status(err.status || 500);
//     res.render("error");
//   });
  // app.use(
  //   cors({
  //     origin: "*",
  //     optionsSuccessStatus: 200,
  //     credentials: true,
  //   })
  // );
  // app.options(
  //   "*",
  //   cors({
  //     origin: "*",
  //     optionsSuccessStatus: 200,
  //     credentials: true,
  //   })
  // );

//   app.set('view engine', 'ejs');
// app.use(expressLayouts);
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
    console.log(`listening on port 6002`);
  
  })
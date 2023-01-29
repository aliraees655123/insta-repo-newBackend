const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


const path = require("path");


const adminRouter = require('./routes/AdminRoutes')

app.use(express.json({ limit: '50mb' }));
app.use(express.json());


//////////////////
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/photo", express.static("upload"));

app.use("/admin",adminRouter);

///



app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "50mb",
    parameterLimit: 100000,
  })
);
app.use(
  bodyParser.json({
    limit: "50mb",
    parameterLimit: 100000,
  })
);

app.use(
  cors({
    origin: "*",
    // credentials: true, //access-control-allow-credentials:true
    // optionSuccessStatus: 200,
  })
);

app.use("/photo", express.static(path.join(__dirname, "./upload")));


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
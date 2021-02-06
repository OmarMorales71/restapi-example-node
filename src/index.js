const express = require("express");
const morgan = require("morgan");

const indexRouter = require("./routes/index");
const moviesRouter = require("./routes/movies");

const app = express();

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(indexRouter);
app.use("/api/movies", moviesRouter);

//Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const methodOverride = require("method-override");

const postsRouter = require("./routes/postssss");
const apiRouter = require("./routes/api");
const port = 3000;

app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use("/posts", postsRouter);
app.use("/api", apiRouter);

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  console.log("MWAHAHAHA IM LISTENING TO THE REQUEST");
  req.method = "DELETE";
  next();
});
app.get("/", (req, res, next) => {
  res.send("hello");
});
app.delete("/", (req, res) => {
  res.send("THE CYBERMEN ARE HERE");
});
// app.get("/api/posts");

app.listen(port, () => console.log(`Express server running on port ${port}`));

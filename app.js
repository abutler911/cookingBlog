const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("layout", "./layouts/main");

const routes = require("./server/routes/recipeRoutes.js");

app.use("/", routes);

app.listen(port, () => console.log(`Server started on port ${port}`));

const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express>StaticRange("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
const routes = require("./controllers/burgers_controller");
app.use(routes);
app.listen(PORT, () => {console.log("Server Listening on: http://localhost:" + PORT);
});
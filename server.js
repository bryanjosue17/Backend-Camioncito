const express = require("express");
const cors = require("cors");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize
  .sync()
  .then(() => {
    console.log("Db sincronizada.");
  })
  .catch((err) => {
    console.log("Fallo en sincronizar db: " + err.message);
  });

// drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Se elimino db y se re-sincronizo db.");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Camioncito Backend!" });
});

require("./app/routes/vehiculos.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

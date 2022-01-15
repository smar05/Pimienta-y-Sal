const express = require("express");
const mainRoutes = require("./routes/main");
const detalleMenuRoutes = require("./routes/detalle");

const app = express();
const port = 3000; //Puerto del servidor

//Archivos publicos
app.use(express.static("public"));

app.set("view engine", "ejs"); //Templete generator

//index
app.use("/", mainRoutes);

//detalle menu
app.use("/detalle", detalleMenuRoutes);

//Inicializar el servidor
app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${port}!`)
);

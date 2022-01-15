const express = require("express");
const mainRoutes = require("./routes/main");

const app = express();
const port = 3000; //Puerto del servidor

//Archivos publicos
app.use(express.static("public"));

app.set("view engine", "ejs"); //Templete generator

//index
app.use("/", mainRoutes);

//Inicializar el servidor
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const app = require("express")();
const cors = require("cors");
// CORS -> Cross origin resource sharing
// Necesitamos permitir que http://localhost:5500 le haga peticiones a mi server.

app.use(
  cors({
    origin: process.env.CORS_URL,
  })
); // Habilita cualquier petición de cualquier lado
// TODO: CONFIGURAR PARA QUE NO PERMITA CUALQUIER COSA

app.get("/", (req, res) => {
  res.send({ mensaje: "Funciona" });
});

app.listen(3000, () => {
  console.log("Funciona");
});

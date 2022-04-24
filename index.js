const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const { connect } = require("./config/db");

// const charactersRoutes = require("./api/routes/characters.routes");
// const universesRoutes = require("./api/routes/universe.routes");
const usersRoutes = require("./api/routes/users.routes");
const artistsRoutes = require("./api/routes/artists.routes");
const eventsRoutes = require("./api/routes/events.routes");
const hallsRoutes = require("./api/routes/halls.routes");
const magazinesRoutes = require("./api/routes/magazines.routes");
const stylesRoutes = require("./api/routes/styles.routes");
const wavesRoutes = require("./api/routes/waves.routes");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dahswyr0k",
  api_key: "769497955813557",
  api_secret: "FPyExRs1IpZKQRRP9Js4_qdv-hQ",
});

const server = express();
connect();

PORT = 5000;

//HEADERS-CABECERAS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//CORS
server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//DEFINO LA SECRETKEY
server.set("secretKey", "supercalifragilisticuespialodoso");

//USO EL LOGGER
server.use(logger("dev"));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// server.use("/characters", charactersRoutes);
// server.use("/universes", universesRoutes);
server.use("/users", usersRoutes);
server.use("/artists", artistsRoutes);
server.use("/events", eventsRoutes);
server.use("/halls", hallsRoutes);
server.use("/magazines", magazinesRoutes);
server.use("/styles", stylesRoutes);
server.use("/waves", wavesRoutes);

server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

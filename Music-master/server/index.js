const express = require ("express");
const cors = require("cors");
const dotenv = require ("dotenv");

const { connect } = require("./config/db");
const { setError } = require("./utils/error.util");

const user = require("./api/routes/user.route");
const music = require("./api/routes/Music.route");  //! Se modifica esta linea para añadir nuevas rutas

const Music = require("./api/models/music.model");

dotenv.config();
connect();



const app = express();

app.set("secretKey", "myApp");

const PORT = 3000;

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:4000"],
        credentials: true,
    })
);
app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());

app.use("/user", user); //! En esta línea se requieren las nuevas rutas añadidas en la línea superior
app.use("/Music", music);

app.use('*',( req, res, next) => {
    return next(setError(404, 'Route not found'))
});

app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

app.disable('x-powered-by');

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
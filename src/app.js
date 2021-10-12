 
//Paquetes 
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const morgan = require("morgan");
const session = require("express-session");
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const cookies = require("cookie-parser");
const cors = require('cors');


//Rutas
const rutaMain = require("./routes/main");
const rutaProductos = require("./routes/productos");
const rutaUsers = require("./routes/users");
const rutaApi = require("./routes/api");
const PORT = process.env.PORT || 3200;
//const rutaUsers = require("./routes/users");

app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

app.use(cors());
app.use(morgan('dev'));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret:"Secreto",
    resave:false,
    saveUninitialized:false
}));

app.use(cookies());
app.use(userLoggedMiddleware);


app.use("/", rutaMain);
app.use("/productos", rutaProductos);
app.use("/users", rutaUsers);
app.use("/api", rutaApi);


app.listen(PORT, () => {
    console.log("Escuchando en http://localhost:" + PORT + "/");
});




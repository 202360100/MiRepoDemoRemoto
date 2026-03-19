const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Usuario = require("./Modelos/Usuario.js")

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//MongoDB
mongoose.connect("mongodb://MarioMongo:CristobalColon2005Mario@ac-flztvrq-shard-00-00.ner595f.mongodb.net:27017,ac-flztvrq-shard-00-01.ner595f.mongodb.net:27017,ac-flztvrq-shard-00-02.ner595f.mongodb.net:27017/GrupoA?ssl=true&replicaSet=atlas-gd66l7-shard-0&authSource=admin&appName=MongoCluster")
.then(() => {
    console.log("Estamos dentro")
})
.catch(err => console.log(err));

app.post("/api/usuarios", async (req, res) => {
    const nuevo = new Usuario(
        {
            nombre: req.body.nombre,
            email: req.body.email,
            genero: req.body.genero,
            plataformas: req.body.plataformas
        }
    );

    const guardado = await nuevo.save();
    res.json(guardado);
    //res("Se ha registrado correctamente");
})

app.get("/api/usuarios", async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
});

app.put("/api/usuarios/:id", async (req, res) => {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
        req.params.id,
        {
            nombre: req.body.nombre,
            email: req.body.email,
            genero: req.body.genero,
            plataformas: req.body.plataformas,
        },
        {new: true}
    );

    res.json(usuarioActualizado);
})

app.listen(port, () => {
    console.log("Listening at http://localhost:" + port);
});

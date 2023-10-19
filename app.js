const express = require("express")
const app = express ();
const path = require("path");

app.listen(3000, () => console.log("esto fue exitoso"));


app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, "/views"))
});


app.get("/tv", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/tv-samsung.html"))
});

app.get("/home", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.use(express.static("public"));

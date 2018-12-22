const express = require('express');
var path = require("path"); 

const PORT = 3000;
var HotRestaurant = express();

HotRestaurant.use(express.urlencoded({extended: true}));
HotRestaurant.use(express.json());




HotRestaurant.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"))
 });


HotRestaurant.listen(PORT);
console.log("Listening to port: " + PORT);
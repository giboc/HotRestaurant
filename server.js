const express = require('express');
const PORT = 3000;
var HotRestaurant = express();




HotRestaurant.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
 });



HotRestaurant.listen(PORT);
console.log("Listening to port: " + PORT);
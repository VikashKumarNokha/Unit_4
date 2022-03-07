const express = require("express") 
  const app = express();

  app.get("/books", function (req, res){
    res.send([{"id":1,"book_name":"Harri","book_author":"Shandie"},
    {"id":2,"book_name":"Rivkah","book_author":"Crissie"},
    {"id":3,"book_name":"Gifford","book_author":"Shaw"},
    {"id":4,"book_name":"Chariot","book_author":"Nathanael"}]);
    });
    
    app.get("/libraries", function (req, res){
        res.send({permission: true});
    });

    app.get("/authors", function (req, res){
        res.send({permission: true});
    });

  app.listen(6002, () => {
    console.log("listening at port 6002")
    });
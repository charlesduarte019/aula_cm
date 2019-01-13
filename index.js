var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res){
    res.send('Fala galerinha!');
});
app.listen(port, function(){
    console.log('Rodando na porta '+port)
});
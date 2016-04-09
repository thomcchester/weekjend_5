var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/pet_finder');
mongoose.model('Pets', new Schema({'name': String, 'type': String, 'age': Number, 'img': String}));
var Pet = mongoose.model('Pets');

app.get('/pets', function(req, res) {
    Pet.find({}, function(err, data){
    if(err){
        console.log(err);
    }

    res.send(data);
    });
});

app.post('/pets', function(req, res) {
    var name = req.body.name;
    var type = req.body.type;
    var age = req.body.age;
    var img = req.body.img;

    var addedPet = new Pet({'name': name, 'type': type, 'age': age, 'img': img});
    addedPet.save(function(err, data) {
        if(err){
            console.log(err);
        }

        res.send(data);
    });
});
app.delete("/delete",function(req,res){
  db.inventory.remove({});
});

app.get("/*", function(req, res) {
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(app.get('port'), function(){
    console.log("Listening on port ", app.get('port'));
});



module.exports = app;

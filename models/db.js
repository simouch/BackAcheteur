var mongoose =require('mongoose');
var mongoDB='mongodb://127.0.0.1/dbase';
//mongoose.connect(mongoDB,{useNewUrlParser:true});


mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  

mongoose.Promise=global.Promise;
var DB=mongoose.connection;
DB.on('error',console.error.bind(console,'MongoDB connectionn error :'));

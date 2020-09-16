const express = require("express");
const mongoose = require("mongoose");

const Workout = express();
const PORT = process.env.PORT || 8080;

Workout.use(express.urlencoded({extended:true}));
Workout.use(express.json());
Workout.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false
})

require("./routes/api")(Workout);
require("./routes/html")(Workout);

Workout.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});

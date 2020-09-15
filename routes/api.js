const Workout = require("../models /workout")

module.exports = function(workout){ 
  workout.get("/api/workouts",function(){  
    Workout.find()
    .then(data => {result.json(data)})
    .catch(error => {result.json(error)})
  });

  workout.post("/api/workouts",function (){    
    Workout.create({})
    .then(data => {result.json(data)})
    .catch(error => {result.json(error)})
    });

    workout.get("/api/workouts/range",function(){  
        Workout.find()
        .then(data => {result.json(data)})
        .catch(error => {result.json(error)})
    });

    workout.post("/api/workouts/range",function (){    
        Workout.create({})
        .then(data => {result.json(data)})
        .catch(error => {result.json(error)})
    });

    workout.put("/api/workouts/:id",({body,params},result)=>{   
        Workout.findByIdAndUpdate(  
         params.id,
         {$push:{exercises:body} },
         {new: true,runValidators:true }
        )
        .then(data => {result.json(data)})
        .catch(error => {result.json(error)})
    });
}
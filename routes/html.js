const path = require("path");

module.exports = function (workout) {
    workout.get("/", function () {
        result.sendFile(path.join(__dirname, "../public/index.html"));
    });
    workout.get("/exercise", function () {
        result.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    workout.get("/stats", function () {
        result.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};
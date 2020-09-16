const path = require("path");

module.exports = function (workout) {
  workout.get("/", function (req, result) {
    result.sendFile(path.join(__dirname, "../public/index.html"));
    });
  workout.get("/exercise", function (req, result) {
    result.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
  workout.get("/stats", function (req, result) {
    result.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};
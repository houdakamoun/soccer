const mongoose = require("mongoose");

const matchSchema = mongoose.Schema({
  teamOne: String,
  teamTwo: String,
  scoreOne: Number,
  scoreTwo: Number,
});

const Match = mongoose.model("Match", matchSchema);
module.exports = Match;

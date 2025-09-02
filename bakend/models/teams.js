const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  teamName: String,
  description: String,
  teamDate: Date,
  image: String,
  players: [{ type: String, ref: "Player" }],
});

module.exports = mongoose.model("Team", teamSchema);

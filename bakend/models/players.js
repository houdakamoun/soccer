const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  playerName: String,
  playerPost: String,
  number: Number,
  teamId: { type: String, ref: "Team" },
});

const player = mongoose.model("Player", playerSchema);
module.exports = player;

const express = require("express"); //importation de express
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/soccer");

//*** start import models

const Match = require("./models/matches");

const Player = require("./models/players");

const Team = require("./models/teams");
const User = require("./models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const { jwtDecode } = require("jwt-decode");
const multer = require("multer");
const path = require("path");
const nodemailer = require("nodemailer");

const FormData = require("form-data");

//*** end import models
const secretKey = "secretHouda";
const app = express(); //creation d'une application
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//session
app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);
// parse application/json
app.use(bodyParser.json());
module.exports = app;
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );

  next();
});

//matches application

app.post("/matches", (req, res) => {
  console.log("here into Add Match", req.session.user);
  console.log("here req body", req.body);

  const data = new Match({
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
  });

  data
    .save()
    .then(() => res.status(200).json({ message: "Match added successfully" }));
});

app.get("/matches", (req, res) => {
  Match.find().then((matchfound) => {
    res.status(200).json({ matches: matchfound });
  });
});
app.get("/matches/:id", (req, res) => {
  const id = req.params.id;
  Match.findOne({ _id: id }).then((findMatch) => {
    res.status(200).json({ match: findMatch });
  });
});
app.delete("/matches/:id", (req, res) => {
  const id = req.params.id;
  Match.deleteOne({ _id: id }).then(() =>
    res.status(200).json({ message: "match deleted" })
  );
});
app.put("/matches", (req, res) => {
  const data = new Match({
    _id: req.body._id,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
  });
  Match.updateOne({ _id: req.body._id }, data).then(() => {
    res.status(200).json({ message: "match update" });
  });
});
// team application

app.get("/teams", (req, res) => {
  Team.find().then((teamfound) => {
    res.status(200).json({ teams: teamfound });
  });
});
app.get("/teams_with_populate", (req, res) => {
  Team.find()
    .populate("players")
    .then((docs) => {
      res.status(200).json({ teams: docs });
    });
});

app.get("/teams/:id", (req, res) => {
  const id = req.params.id;
  Team.findOne({ _id: id }).then((findTeam) => {
    res.status(200).json({ team: findTeam });
  });
});
app.put("/teams", (req, res) => {
  const data = new Team({
    _id: req.body._id,
    teamName: req.body.teamName,
    description: req.body.description,
    teamDate: req.body.teamDate,
  });
  Team.updateOne({ _id: req.body._id }, data).then(() => {
    res.status(200).json({ message: "Team update" });
  });
});
app.delete("/teams/:id", (req, res) => {
  const id = req.params.id;
  Team.deleteOne({ _id: id }).then(() =>
    res.status(200).json({ message: "team deleted" })
  );
});
// player application

app.post("/players", (req, res) => {
  console.log("here into Add Player");
  console.log("here req body", req.body);

  const data = new Player({
    playerName: req.body.playerName,
    playerPost: req.body.playerPost,
    number: req.body.number,
    teamId: req.body.teamId,
  });
  console.log("here req body", req.playerPost);
  console.log("here req body", req.body);

  data.save((err, doc) => {
    if (err) {
    } else {
      Team.findOne({ _id: req.body.teamId }).then((findTeam) => {
        if (findTeam) {
          findTeam.players.push(doc._id);

          Team.updateOne({ _id: req.body.teamId }, findTeam).then(() => {
            console.log("55555", "sart mise a jour ");
            res.status(200).json({ mesage: "player aded" });
          });
        }
      });
    }
  });
});
app.get("/players", (req, res) => {
  Player.find()
    .populate("teamId")
    .then((docs) => {
      res.status(200).json({ players: docs });
    });
});
app.get("/players/:id", (req, res) => {
  const id = req.params.id;
  Player.findOne({ _id: id }).then((findPlayer) => {
    res.status(200).json({ player: findPlayer });
  });
});
app.put("/players", (req, res) => {
  const data = new Player({
    _id: req.body._id,
    playerName: req.body.playerName,
    playerPost: req.body.playerPost,
    number: req.body.number,
    team: req.body.teamName,
  });
  Player.updateOne({ _id: req.body._id }, data).then(() => {
    res.status(200).json({ message: "Player update" });
  });
});
app.delete("/players/:id", (req, res) => {
  const id = req.params.id;
  Player.deleteOne({ _id: id }).then(() =>
    res.status(200).json({ message: "player deleted" })
  );
});

//app user

// app.post("/user/signup", (req, res) => {
//   console.log("here into signup");
//   console.log("here req body", req.body);
//   bcrypt.hash(req.body.password, 10, function (err, hash) {
//     if (err) {
//       console.log("dcrypt error");
//     } else {
//       const data = new User({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         tel: req.body.tel,
//         role: req.body.role,
//         password: hash,
//       });

//       console.log("here req body", req.body);
//       data.save((error, docs) => {
//         if (error) {
//           console.log("0000", error);
//           res.status(200).json({ message: "1" });
//         } else {
//           console.log("1111", docs);
//           res.status(200).json({ message: "0" });
//         }
//       });
//     }
//   });
// });

app.post("/user/signup", (req, res) => {
  console.log("here into signup");
  console.log("here req body", req.body);
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) {
      console.log("dcrypt error");
    } else {
      const data = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        tel: req.body.tel,
        role: req.body.role,
        password: hash,
      });

      console.log("here req body", req.body);
      data.save((error, docs) => {
        if (error) {
          console.log("0000", error);
          res.status(200).json({ message: "1" });
        } else {
          console.log("1111", docs);
          res.status(200).json({ message: "0" });
        }
      });
    }
  });
});

app.post("/user/login", (req, res) => {
  console.log(req.body);

  User.findOne({ email: req.body.email }).then(async (findUser) => {
    console.log("here req.body", req.body);

    if (!findUser) {
      return res.status(200).json({ message: "0" });
    }
    const trustedPwd = await bcrypt.compare(
      req.body.password,
      findUser.password
    );
    if (!trustedPwd) {
      return res.status(200).json({ message: "1" });
    }
    console.log("here findUser", findUser);
    req.session.regenerate(function (err) {
      if (err) {
        console.log("erro1", err);
      }

      // store user information in session, typically a user id
      req.session.user = { id: findUser._id, firstName: findUser.firstName };

      // save the session before redirection to ensure page
      // load does not happen before session is saved
      req.session.save(function (err) {
        if (err) {
          console.log("erro2", err);
        } else {
          console.log("session saved");
        }
      });
    });
    // req.session.cookie = { id: findUser._id, firstName: findUser.firstName };
    const token = jwt.sign({ user: findUser }, secretKey, {
      expiresIn: "1h",
    });
    return res.status(200).json({ message: "2", user: token });
  });
});

// unplod photos
const upload = multer({ dest: "images/" });
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "bakend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});

app.post("/teams", multer({ storage: storage }).single("image"), (req, res) => {
  console.log(req.body);
  console.log("file", req.file);
  console.log("here into post");

  let url = req.protocol + "://" + req.get("host");
  let image = url + "/images/" + req.file.filename;

  const data = new Team({
    teamName: req.body.teamName,
    description: req.body.description,
    teamDate: req.body.teamDate,
    image: image,
  });
  console.log("dataaaaaa");
  data
    .save()
    .then(() => res.status(200).json({ message: "Team added successfully" }));
});

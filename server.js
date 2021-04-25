const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const router = express.Router();

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
//const uploads = require("./routes/api/uploads");

const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const { decodeBase64 } = require("bcryptjs");

const app = express();

// Body-Parser middleware :
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

//DB Config :
const db = require("./config/keys").mongoURI;
const mongoURI =
  "mongodb+srv://mern01:Password01@devconnectormern-3tgde.mongodb.net/test?retryWrites=true&w=majority";

// Connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("My MongoDB connected"))
  .catch((err) => console.log("MongoDb not connected to ", db, err));

//var conn = mongoose.connection;
const conn = mongoose.createConnection(mongoURI, { useNewUrlParser: true });

// Passport middleware
app.use(passport.initialize());

//Init GFS:
let gfs;
//Init stream
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        //const filename = buf.toString("hex") + path.extname(file.originalname);
        console.log("file: server.js " + file);
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

// Passport config
require("./config/passport")(passport);

// Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
//app.use("/api/uploads", uploads);

//Serve static assets if in Production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// @route POST /upload
// @desc Uploads file to DB
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});

const port = process.env.PORT || 5000;
//const port = 8000 || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const multer = require("multer");

const mongoURI =
  "mongodb+srv://mern01:Password01@devconnectormern-3tgde.mongodb.net/test?retryWrites=true&w=majority";

//var conn = mongoose.connection;
const conn = mongoose.createConnection(mongoURI, { useNewUrlParser: true });

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

// @route POST /upload
// @desc Uploads file to DB
router.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});

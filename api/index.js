const express = require ('express')
const app = express();
const dotenv = require ("dotenv")
const mongoose = require ("mongoose")
const authRoute = require ("./routes/auth")
const userRoute = require ("./routes/users")
const postRoute = require ("./routes/posts")
const categoryRoute = require ("./routes/categories")
const multer = require("multer")
const path = require("path")

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(console.log("Connected to Database!"))
.catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images")
    }, 
    filename:(req, file, cb) => {
        cb(null, req.body.name)
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("File successfully uploaded!");
});

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend is running!")
})
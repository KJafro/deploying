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
const cors = require ("cors")
const PORT = process.env.PORT || 5000;
const cloudinary = require('./cloudinary/cloudinary').v2;

app.use(
    cors({
        origin: "*"
    })
);

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}))

dotenv.config();
app.use("/images", express.static(path.join(__dirname, "/images")))

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     })
//   })

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(console.log("Connected to DB!!!!!"))
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

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server Started at Port ${PORT}`)
 });
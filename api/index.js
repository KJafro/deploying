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
app.use(
    cors({
        origin: "*"
    })
)

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(console.log("Connected to Database!!!"))
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

app.use("/auth", authRoute)
app.use("/users", userRoute)
app.use("/posts", postRoute)
app.use("/categories", categoryRoute)

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server Started at Port ${PORT}`)
 });
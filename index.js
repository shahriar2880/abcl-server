import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import bodyParser from "body-parser";
import cors from "cors"
import path from 'path'
import { fileURLToPath } from "url";


const app = express()




app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//configure env
dotenv.config();



//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);


//rest api
app.get('/', (req, res) => {
    res.send("<h1> This is my new server</h1>")
})

const PORT = process.env.PORT || 8000;




//database config
connectDB();

//es module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename)

//middleware
app.use(morgan("dev"))
app.use(express.json());
app.use(express.static(path.join(__dirname,'../abcl-client/build')))


app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname,'../abcl-client/build/index.html'))
})


// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: false }));




app.listen(PORT, () => {
  console.log(
    `Server Running on port ${PORT}`
  );
});
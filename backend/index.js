import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import expenseRoute from './routes/expense.js';

dotenv.config()
const app = express();
const port = process.env.port;
app.use(express.json());
app.use(cors()); //MIDDLEWARE

app.use('/expenses', expenseRoute); //Route


//Db connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Db connected successfully")
}).catch((e) => {
    console.log("error")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

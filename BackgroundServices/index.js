import express from 'express';
import cron from 'node-cron';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import expenseEmail from './emailService/Expense.js'

dotenv.config()
const app = express();
const port = process.env.PORT;



mongoose.connect(process.env.MONGO_URL).then(() =>
{
    console.log("Db connected")
}).catch((err) => {
    console.log(err)
})

const Schedule = () =>{
    cron.schedule('* * * * *', () => {
  expenseEmail();   
});
}

Schedule();
app.listen(port, ()=>{
    console.log(`Background Service is  running in ${port}`)
})
import express from 'express';
import cron from 'node-cron';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import expenseEmail from './emailService/Expense'

dotenv.config()
const app = express();
const port = process.env.port;



mongoose.connect(process.env.MONGO_URL).then(() =>
{
    console.log("Db connected")
}).catch((err) => {
    console.log(err)
})

const Schedule = () =>{
    cron.schedule('* * * * *', () => {
  expenseEmail(messageOption)
        
    
});
}

Schedule();
app.listen(port, ()=>{
    console.log(`Server running in ${port}`)
})
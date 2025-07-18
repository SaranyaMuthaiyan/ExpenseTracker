import express from 'express';
import cron from 'node-cron';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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
  console.log('Running a task every minute');
    
});
}

Schedule();
app.listen(port, ()=>{
    console.log(`Server running in ${port}`)
})
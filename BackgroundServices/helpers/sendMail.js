import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


dotenv.config()

function createTransporter(config){
    const transporter = nodemailer.createTransport(config)
return transporter;
}

let configurations ={
    service:"gmail",
    host:"test3@exa.com",
    port:777,
    requireTLS:true,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD,
    },
};

const sendMail = async (messageOption) => {
  const transporter = await createTransporter(configurations);
  await transporter.verify();
  await transporter.sendMail(messageOption, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log(info.response);
  });
};
export default sendMail
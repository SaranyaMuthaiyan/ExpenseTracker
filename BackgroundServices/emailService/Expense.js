import dotenv from 'dotenv'
import sendMail from './helpers/sendMail'
import Expense from './modles/Expense';
dotenv.config();

const expenseEmail = async() =>{
const expenses = await Expense.find();
const totalExpense= expenses.reduce(
    (acc, expense) => acc + expense.value,
    0)
if(totalExpense > 5000){
    let messageOption={
        from:process.env.EMAIL,
        to:process.env.ADMIN_EMAIL,
        subject:"warning",
        text:`Your total expense is  ${totalExpense}.`
    }
await sendMail(messageOption)
}

};
export default expenseEmail
import mongoose from "mongoose";

const ExpenseSchema = mongoose.Schema({
    label: {type:String, require:true },
        value:{type:Number, require:true },
        date:{type:String, require:true }
    })

const Expense = mongoose.model("Expense", ExpenseSchema)

export default Expense;
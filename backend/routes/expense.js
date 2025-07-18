import Express from 'express';
import Expense from '../models/Expense.js';



//Routes
const router = Express.Router();

//Add an  expense
router.post('/', async(req, res) => {
    console.log(req.body)
try{
   const newExpense = await Expense(req.body);
   const expense = newExpense.save();
res.status(201).json(expense)
}catch(err){
    res.status(400).json({error: err.message})
}

})
//Get  an expense
router.get('/', async(req, res) => {
    
try{
    const expenses =await  Expense.find().sort({createAt:1});
res.status(201).json(expenses)
}catch(err){
    res.status(400).json({error: err.message})
}
})

//Update an expense
router.put('/:id', async(req, res) => {
try{
    const expense = await Expense.findByIdAndUpdate(req.params.id,
        { $set:req.body,},
        { new: true }
    );
res.status(201).json(expense)
}catch(err){
    res.status(400).json({error: err.message})
}

})
//delete an expense
router.delete('/:id', async(req, res) => {
try{
 await Expense.findByIdAndDelete(req.params.id);
res.status(201).json("Deleted Successfully")
}catch(err){
    res.status(400).json({error: err.message})
}

})

export default router
const Todo = require('../models/Todo')

module.exports = {
  getTodos: async (req, res) =>{
    console.log(req.user)
    try{
      const todoItems = await Todo.find({googleId: req.user.googleId})
      const itemsLeft = await Todo.countDocuments({googleId: req.user.googleId, completed: false})
      res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
    }catch(err){
      console.log(err)
    }
  },
  createTodo: async (req, res) => {
    try{
      await Todo.create({todo: req.body.todoItem, completed: false, googleId: req.user.googleId})
      console.log('Todo has been added')
      res.redirect('/todos')
    }catch(err){
      console.log(err)
    }
  },
  markComplete: async (req, res) => {
    try{
      await Todo.findOneAndUpdate({id:req.body.todoIdFromJSFile},{
        completed: true
      })
      console.log('Marked Complete')
      res.json('Marked Complete')
    }catch(err){
      console.log(err)
    }
  },
  markIncomplete: async (req, res) => {
    try{
      await Todo.findOneAndUpdate({id:req.body.todoIdFromJSFile},{
        completed: false
      })
      console.log('Marked Incomplete')
      res.json('Marked Incomplete')
    }catch(err){
      console.log(err)
    }
  },
  deleteTodo: async (req, res) => {
    console.log(req.body.todoIdFromJSFile)
    try{
      await Todo.findOneAndDelete({id:req.body.todoIdFromJSFile})
      console.log("Deleted Todo")
      res.json("Deleted It")
    }catch(err){
      console.log(err)
    }
  }
}
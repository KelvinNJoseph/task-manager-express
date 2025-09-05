const Task = require('../models/task')

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getTask =(req, res) => {
    res.json({id:req.params.id})
}

const updateTasks = (req, res) => {
    res.send('Update task')
}

const deleteTasks = (req, res) => {
    res.send('Delete task')
}
module.exports= {
    getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTasks
}
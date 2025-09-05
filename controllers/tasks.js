const Task = require('../models/task');
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custome-error')

const getAllTasks = asyncWrapper(async(req, res) => {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
   
});

const createTasks = asyncWrapper(async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({task})
});

const getTask =asyncWrapper(async(req, res, next) => {
        const{id: taskId} = req.params
        const task = await Task.findOne({ _id:taskId });
        if (!task) {
           return next(createCustomError(`No task with id: ${taskId}`, 404));
        }
        res.status(200).json({task})
    
});

const deleteTasks = asyncWrapper(async(req, res) => {
        const {id: taskId} = req.params;
        const task = await Task.findOneAndDelete({_id: taskId});
        if (!task) {
         return next(createCustomError(`No task with id: ${taskId}`, 404));
        }
        res.status(200).json({task})
    
});

const updateTasks =asyncWrapper(async(req, res) => {
        const {id: taskId} = req.params;
        const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
            new: true, 
            runValidators: true
        });
         if (!task) { 
            return next(createCustomError(`No task with id: ${taskId}`, 404))
         }
        res.status(200).json({task})
});


module.exports= {
    getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTasks
}

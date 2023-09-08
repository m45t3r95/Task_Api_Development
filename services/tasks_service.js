// Create Task
exports.createTask = (req,res)=>{
    const body = req.body;

    res.status(200).json({
        message: "Task has been created successfully"
    })
}

// Read Tasks
exports.readTasks = (req,res)=>{
    const body = req.body;

    res.status(200).json({
        message: "Reading the tasks"
    })
}

// Update Task
exports.updateTask = (req,res)=>{
    const body = req.body;

    res.status(200).json({
        message: "Task has updated successfully"
    })
}

// Delete Task
exports.deleteTask = (req,res)=>{
    const body = req.body;

    res.status(200).json({
        message: "Task has been deleted successfully"
    })
}
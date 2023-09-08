// Create Task
exports.createUser = (req,res)=>{
    const body = req.body;

    res.status(200).json({
        message: "User has been created successfully"
    })
}

// Read Tasks
exports.readUsers = (req,res)=>{
    const body = req.body;

    res.status(200).json({
        message: "Reading the users"
    })
}

// Update Task
exports.updateUser = (req,res)=>{
    const body = req.body;

    res.status(200).json({
        message: "User has updated successfully"
    })
}

// Delete Task
exports.deleteUser = (req,res)=>{
    const body = req.body;

    res.status(200).json({
        message: "User has been deleted successfully"
    })
}
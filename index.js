const express = require('express')
const app = express();
app.use(express.json());
const dbConnect = require('./db_connect');

dbConnect();

app.listen(3000,()=>{
    console.log("Server is running")
})

// Don't touch above code if you don't know what you are doing --------------------
const taskRoutes = require("./routes/tasks_routes");
const userRoutes = require("./routes/users_routes");

app.use('/api', taskRoutes);
app.use('/api', userRoutes);
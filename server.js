const express = require('express')
const mongoose  = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5002;

app.use(express.json())
app.use(cors());

mongoose.connect(
    "mongodb+srv://sksami853:Sksami020304!@cluster3.e5c18.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3",
 {}
 )
 .then(()=>{
    console.log("Connected TO Database")
 });
 const userRoute=require("./routes/user.route");
 const todoRoute=require("./routes/todo.route")
 app.use("/user",userRoute);
 app.use("/todo",todoRoute); 


app.get("/",(req, res)=>{
    res.send("Hello World");
    res.end();
})
app.listen(PORT,()=>{
    console.log(`Server is running on the port http://localhost:${PORT}/`);
})
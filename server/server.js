<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3000;
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");


app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email, password })
      .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }
            else{
                res.json("wrong password")
            }
        }else{
            res.json("user not found")
        }
      })
  })

  

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)

    .then((employees) => res.json(employees))
    .catch((err) => console.log(err));
});



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
=======
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')   
const PORT = 3000 
const EmployeeModel = require('./models/Employee')


const app = express()
app.use(express.json())
app.use(cors())



mongoose.connect("mongodb://localhost:27017/employee")

app.post("/register", (req, res) => {

    

    EmployeeModel.create(req.body)

    .then(employees => res.json(employees))
        .catch(err => console.log(err))



    

}
)




app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
>>>>>>> e3b820e511de8498d587188cb02262ea5fc60bea

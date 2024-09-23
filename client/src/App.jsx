import React, { useState } from 'react'
import SignUp from './SignUp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
<<<<<<< HEAD
import Home from './home';


=======
>>>>>>> e3b820e511de8498d587188cb02262ea5fc60bea



function App() {

  const [count, setCount] = useState()






  return (


    <BrowserRouter>
    <Routes>
      <Route path='/register' element= {<SignUp />}></Route>
      <Route path='/login' element= {<Login />}></Route>
<<<<<<< HEAD
      <Route path='/home' element= {<Home />}></Route>
=======
>>>>>>> e3b820e511de8498d587188cb02262ea5fc60bea
    </Routes> 
    
    </BrowserRouter>
  )
}

export default App

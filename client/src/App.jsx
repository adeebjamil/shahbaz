import React, { useState } from 'react'
import SignUp from './SignUp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './home';





function App() {

  const [count, setCount] = useState()






  return (


    <BrowserRouter>
    <Routes>
      <Route path='/register' element= {<SignUp />}></Route>
      <Route path='/login' element= {<Login />}></Route>
      <Route path='/home' element= {<Home />}></Route>
    </Routes> 
    
    </BrowserRouter>
  )
}

export default App

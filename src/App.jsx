import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import QuizApp from './Component/QuizApp'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/quiz' element={<QuizApp/>} />
      </Routes>
    </Router>
  )
}

export default App

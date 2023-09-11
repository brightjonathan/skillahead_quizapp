import React from 'react'
import { Link } from 'react-router-dom'
import './Quizapp.css'

const Home = () => {
  return (
    <div className='home'>
      <h2 className='H2'> welcome to this smart quiz application  </h2>
      <h2 className='H3'>NOTE: (1) We have 26 questuons all in general which includes ['HTML', 'CSS', 'JAVASCRIPT', 'REACT JS'] <br/> (2) Each question has a timer of 120 seconds [2mins] <br/> (3) Once you click "Next" you cannot go back to previous question</h2>
      <h2 className='H4'> 🍀 Good luck with your Exam </h2>
       <Link to='/quiz'> <button className='getStarted'> Get started </button> </Link> 
    </div>
  )
}

export default Home;

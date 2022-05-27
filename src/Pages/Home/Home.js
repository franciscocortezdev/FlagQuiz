import React from 'react'
import './Home.css'
import startPic from '../../img/StartGame.png'

export function Home() {
  return (
    <div className='containerHome'>

      <p className='title'>Wellcome</p>
      <p className='titleTo'>To</p>
      <p className='titleGame'>FlagQuiz</p>


      <img className='startPic' src={startPic} alt='startQuiz'/>
      <a className='btnStart' href='/gamestart'>Start Quiz</a>

    </div>
  )

}



import React from 'react'
import './EndGame.css'
import endPic from '../../img/EndGame.png'



export function EndGame({params}) {
  
  return (
    <div className='containerEnd'>

      <h1 className='titleEnd'>Game Over</h1>
      <img className='endPic' src={endPic} alt='endGame'/>
      <p className='pointTitle'>Puntos Obtenidos</p>
      <p className='point'>{params.points}</p>
      <a className='btnEnd' href='/gamestart'>Play Again</a>
    </div>
  )


}


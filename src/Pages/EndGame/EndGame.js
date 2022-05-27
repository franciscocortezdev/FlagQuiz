
import React from 'react'

export function EndGame({params}) {
  
  return (
    <div>
      <h1>EndGame</h1>
      <p>Puntos Obtenidos</p>
      <p>{params.points}</p>
      <a href='/gamestart'>Play</a>
    </div>
  )


}


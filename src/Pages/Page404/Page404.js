import React from 'react'
import { Link } from "wouter";
import "./Page404.css"
import Pic404 from "../../img/Code404.png"

export function Page404() {
  return (
    <>
    <div className='container_Page404'>
      <img className='Pic404' src={Pic404} alt={Pic404} />
      <h1 className='Title404'>PAGE NOT FOUND</h1>
      <p className='Msg404'>The page you are looking is not available</p>
      <Link className="btnEnd" to="/">
        Back to Home
      </Link>
    </div>
    
    </>
  )
}

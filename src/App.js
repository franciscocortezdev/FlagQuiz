import './App.css';
import { Picture } from './components/Picture'
import {useState} from 'react';




export function App() {
 
  const [rand, setRand] = useState(Math.floor(Math.random()*110));
 
  return (
    <div> 
      <h1>De que pais es esta bandera?</h1>
     
       <Picture rd={rand}/>

      <button onClick={()=>{setRand(Math.floor(Math.random()*110))}} >Siguiente Pais</button>


    </div>
    
    


  );
}

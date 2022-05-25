import './App.css';
import { CountryGame } from './components/CountryGame/CountryGame'
import {useState} from 'react';




export function App() {
 
  const [rand, setRand] = useState(Math.floor(Math.random()*110));
 
  return (
    <div className='container'> 
      <div className='containerGame'> 
       <CountryGame rd={rand}/>

      <button className='btnNext' onClick={()=>{setRand(Math.floor(Math.random()*110))}} >Next Country</button>
      </div>

    </div>
    
    


  );
}

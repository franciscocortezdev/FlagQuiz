import './App.css';
import { getAllCountrys } from './API/getCountrys'
import {useState, useEffect} from 'react';



function App() {
  const [countrys, setCountrys] = useState([]);

  useEffect(()=>{
    getAllCountrys().then(data =>{
      const result = data.filter(country => country.hasOwnProperty('borders') && country.borders.length >= 2);
      setCountrys(result);
    } );
  },[]);
  
  let Ncountry = Math.floor(Math.random()*140)
  

  return (
    <div> 
      <h1>De que pais es esta bandera?</h1>
      
      {countrys.map(count => (
        <p key={count.cca2}>{count.name.official}</p>
      ))}
    
    </div>
    
    


  );
}

export default App;

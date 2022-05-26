import './App.css';
import { CountryGame } from './components/CountryGame/CountryGame'
import {Route } from "wouter"

export function App() {
 
  
 
  return (

    <div className='container'> 
      <div className='containerGame'> 

       
        <Route 
        component={CountryGame}
        path="/gamestart"
        />
      
      </div>

    </div>
    
    


  );
}

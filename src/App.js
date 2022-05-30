import "./App.css";
import { CountryGame } from "./components/CountryGame/CountryGame";
import { Home } from "./Pages/Home/Home";
import { EndGame } from "./Pages/EndGame/EndGame";
import { Route } from "wouter";

export function App() {
  return (
    <div className="container">
      <div className="containerGame">
        <Route component={Home} path="/" />
        <Route component={CountryGame} path="/gamestart" />
        <Route component={EndGame} path="/gameend/:points" />
      </div>
    </div>
  );
}

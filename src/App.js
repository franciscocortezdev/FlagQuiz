import "./App.css";
import { CountryGame } from "./components/CountryGame/CountryGame";
import { Home } from "./Pages/Home/Home";
import { EndGame } from "./Pages/EndGame/EndGame";
import { Route, Switch} from "wouter";
import {Page404} from "./Pages/Page404/Page404"

export function App() {
  return (
    <div className="container">
      <div className="containerGame">
        <Switch>
        <Route component={Home} path="/FlagQuiz/" />
        <Route component={CountryGame} path="/FlagQuiz/game/start" />
        <Route component={EndGame} path="/FlagQuiz/game/end/:points" />
        <Route component={Page404} path="/FlagQuiz/:rest*" />
        </Switch>
      </div>
    </div>
  );
}

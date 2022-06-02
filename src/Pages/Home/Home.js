import React from "react";
import "./Home.css";
import startPic from "../../img/StartGame.png";
import { Link } from "wouter";

export function Home() {
  return (
    <div className="containerHome">
      <p className="title">Wellcome</p>
      <p className="titleTo">To</p>
      <p className="titleGame">FlagQuiz</p>
      <div className="containerBodyHome">
      <img className="startPic" src={startPic} alt="startQuiz" />
      <Link className="btnStart" to="/FlagQuiz/game/start">
        Start Quiz
      </Link>
      </div>
    </div>
  );
}

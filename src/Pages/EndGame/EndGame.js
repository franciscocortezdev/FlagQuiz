import React from "react";
import "./EndGame.css";
import endPic from "../../img/EndGame.png";
import { Link } from "wouter";

export function EndGame({ params }) {
  return (
    <div className="containerEnd">
      <div className="containerHeadEnd">
      <h1 className="titleEnd">Game Over</h1>
      <img className="endPic" src={endPic} alt="endGame" />
      </div>
      <p className="pointTitle">Puntos Obtenidos</p>
      <p className="point">{params.points}</p>
      <Link className="btnEnd" to="/">
        Play Again
      </Link>
    </div>
  );
}

import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../img/Winner.svg";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>O jogo chegou ao fim!</h2>
      <p>Sua pontuação foi de: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Jogar Novamente</button>
    </div>
  );
};

export default GameOver;

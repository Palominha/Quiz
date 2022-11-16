import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

import Quiz from "../img/Questions.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Que tal testar seus conhecimentos? </p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;

import { Main } from "../styled-components/main";
import { Link } from "react-router-dom";
import "./summary.css";

function Summary() {
  return (
    <Main>
      <h1>Here you can check all the topics that I already learned:</h1>
      <Link to="/basic-html">Basic HTML</Link>
    </Main>
  );
}

export default Summary;

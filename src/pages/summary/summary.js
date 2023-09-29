import { Link } from "react-router-dom";
import "./summary.css";

function Summary() {
  return (
    <div>
      <h1>Here you can check all the topics that I already learned:</h1>
      <nav>
        <ul>
          <li>
            <Link to="/basic-html">Basic HTML</Link>
          </li>
          <li>
            <Link to="/intro-css">Intro for CSS</Link>
          </li>
          <li>
            <Link to="/css-text">Using CSS to style Texts and Links</Link>
          </li>
          <li>
            <Link to="/css-colors">Using CSS to style Colors</Link>
          </li>
          <li>
            <Link to="/box-model">
              Learn more about border, margin and padding in CSS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Summary;

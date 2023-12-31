import { Link } from "react-router-dom";
import "./summary.css";

function Summary() {
  return (
    <main className="summary">
      <h1>Here you can check all the topics that I already learned:</h1>
      <nav className="summary-link teste">
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
          <li>
            <Link to="/flexbox">Using flexbox to organize your page</Link>
          </li>
          <li>
            <Link to="/flexbox-practice">Page with flexbox exercise</Link>
          </li>
          <li>
            <Link to="/css-grid">Learn about CSS Grid</Link>
          </li>
          <li>
            <Link to="/css-grid-exercise">Page with CSS Grid exercise</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Summary;

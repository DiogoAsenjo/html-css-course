import "./homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>HTML and CSS Notebook</h1>
      <p>
        I will use this repo and this React project as part of my HTML and CSS
        studies. I already have some basic knowledge. Right know I consider
        myself at least a junior backend developer, but my frontend abilities
        are grose, so I will create this project to develop my skills!
      </p>
      <Link to="/summary">Summary</Link>
    </div>
  );
}

export default Homepage;

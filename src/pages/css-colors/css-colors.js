import "./css-colors.css";
import colors from "../../assets/images/css-colors/colors.png";
import Footer from "../../components/footer/footer";

function CSSColors() {
  return (
    <div>
      <h1>Using colors in CSS!</h1>
      <p>
        There are multiple ways to use colors in CSS, we can use the name of the
        color, their RGB or, the most commom, their hexadecimal code, I'll show
        and example of every way to use it:
      </p>
      <img src={colors} alt="Showing how to use colors in CSS" />
      <p>
        Here, all of the examples represents the same color, red. As you start
        doing your own projects, you probably won't know what colors to use, so
        here are a few websites that I already use for my projects{" "}
        {"(including this one rsrs)"} and probably wil help you too!
        <ul>
          <li>
            <a href="https://coolors.co/" target="_blank" rel="noreferrer">
              Coolors
            </a>
          </li>
          <li>
            <a href="https://colorhunt.co/" target="_blank" rel="noreferrer">
              Colorhunt
            </a>
          </li>
          <li>
            <a href="https://mycolor.space/" target="_blank" rel="noreferrer">
              My color space
            </a>
          </li>
        </ul>
      </p>
      <Footer />
    </div>
  );
}

export default CSSColors;

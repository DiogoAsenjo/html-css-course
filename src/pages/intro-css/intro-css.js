import { Main } from "../styled-components/main";
import image from "../../assets/images/intro-css/declaration.PNG";
import inlineCSS from "../../assets/images/intro-css/inline-css.PNG";
import inlineCSSReact from "../../assets/images/intro-css/inline-css-react.PNG";
import internalCSS from "../../assets/images/intro-css/internal-css.PNG";
import externalPure from "../../assets/images/intro-css/external-css.PNG";
import externalReact from "../../assets/images/intro-css/external-css-react.PNG";
import Footer from "../../components/footer/footer";
import "./intro-css.css";

function IntroCSS() {
  return (
    <Main>
      <header>
        <h1>Basic knowledge for CSS</h1>
      </header>
      <article>
        <p>
          CSS, Cascading Style Sheets, is what gives out HTML page style! But
          how we do it?
        </p>
        <h2>Selecting and styling elements</h2>
        <img src={image} alt="CSS being used" width="500" height="300" />
        <p>
          It does work something like the image above!
          <br />
          First um select the tag or the class that you want to manipulate, then
          you open {"{ }"} and put all the properties and values for the
          selected element.
        </p>
        <h2>Inline, internal and external CSS</h2>
        <ul>
          <li>Inline</li>
          <p>
            We can use inline CSS by giving a propertie to a HTML tag, like
            these:
          </p>
          <ol>
            <li>
              Pure CSS <img src={inlineCSS} alt="Inline with CSS pure" />
            </li>
            <li>
              In React <img src={inlineCSSReact} alt="Inline with React" />
            </li>
          </ol>
          <p>We should never use CSS inline, but it's good to know!</p>
          <li>Internal</li>
          <p>
            We can use internal by putting the tag styles inside of the head of
            the HTML document, like here:
          </p>
          <ol>
            <li>
              <img src={internalCSS} alt="Interncal CSS" />
            </li>
          </ol>
          <p>
            As CSS codes can get really big, we also almost never uses this, the
            last one is actually the most used
          </p>
          <li>External</li>
          <p>We create a external CSS file and link with the HTML.</p>
          <ol>
            <li>
              In pure HTML/CSS we should use the tag link, like this:{" "}
              <img src={externalPure} alt="External CSS in pure HTML/CSS" />
            </li>
            <li>
              In React we just import the file, like this:{" "}
              <img src={externalReact} alt="External CSS in pure HTML/CSS" />
            </li>
          </ol>
        </ul>
      </article>
      <Footer />
    </Main>
  );
}

export default IntroCSS;

import image from "../../assets/images/intro-css/declaration.png";
import inlineCSS from "../../assets/images/intro-css/inline-css.PNG";
import inlineCSSReact from "../../assets/images/intro-css/inline-css-react.PNG";
import internalCSS from "../../assets/images/intro-css/internal-css.PNG";
import externalPure from "../../assets/images/intro-css/external-css.PNG";
import externalReact from "../../assets/images/intro-css/external-css-react.PNG";
import classes from "../../assets/images/intro-css/class-id.PNG";
import classesInCSS from "../../assets/images/intro-css/class-id-css.PNG";
import Footer from "../../components/footer/footer";
import "./intro-css.css";

function IntroCSS() {
  return (
    <div className="intro-css">
      <header>
        <h1>Basic knowledge for CSS</h1>
      </header>
      <article>
        <p>
          CSS, Cascading Style Sheets, is what gives out HTML page style! But
          how we do it?
        </p>
        <h2>Selecting and styling elements</h2>
        <img src={image} alt="CSS being used" width="310" height="262" />
        <p>
          It does work something like the image above!
          <br />
          First um select the tag or the class that you want to manipulate, you
          can put more than one class, just separate then with a comma, then you
          open {"{ }"} and put all the properties and values for the selected
          element.
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
        <h2>Classes and id's</h2>
        <p>
          To make you life easier, there's two ways to simplify your CSS
          styling, you can give the tag and ID or a Class, it should look
          something like this:
          <br />
          This is how we declare id or classes, importante note, we can't have
          more than 1 id with the same name, id is unique:
          <img src={classes} alt="" />
          <br />
          This is style them in CSS:
          <img src={classesInCSS} alt="" />
        </p>
      </article>
      <Footer />
    </div>
  );
}

export default IntroCSS;

import inline from "../../assets/images/intro-css/inline.png";
import internal from "../../assets/images/intro-css/internal.png";
import external from "../../assets/images/intro-css/external.png";
import classes from "../../assets/images/intro-css/class-id.png";
import Footer from "../../components/footer/footer";
import styleElement from "../../assets/images/intro-css/style-element.png";
import styleId from "../../assets/images/intro-css/style-id.png";
import styleClass from "../../assets/images/intro-css/style-class.png";
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
        <p>
          We need to select an element, a class or an id, open {"{ }"} and put
          all the properties and the values that we want!
          <br />
          In the next sections of my notebook we will talk more about those
          properties and values, so keep up with your studies.
          <br />
          Here are some examples of how we can do it:
        </p>
        <img src={styleElement} alt="CSS being used with element" />
        <img src={styleClass} alt="CSS being used with class" />
        <img src={styleId} alt="CSS being used with id" />
        <h2>Classes and id's</h2>
        <p>
          We talked about classes, elements and id, but what exactly are these?
          <br />
          Elements are simple HTML tags, classes and id are something that we
          can declare inside of the HTML tag, in real world we almost never use
          id, because it can only be used once.
          <br />
          This is how we declare id or classes:
          <br />
          <img src={classes} alt="Naming classes or id" />
        </p>
        <h2>Inline, internal and external CSS</h2>
        <p>
          There's multiple ways to style CSS, the inline, the internal and the
          external. Usually we just just external one, but here we'll see all
          the types
        </p>
        <ul>
          <li>Inline</li>
          <p>
            We can use inline CSS by giving a propertie to a HTML tag, like
            these:
          </p>
          <br />
          <img src={inline} alt="Inline CSS" />
          <p>We should never use CSS inline, but it's good to know!</p>
          <li>Internal</li>
          <p>
            We can use internal by putting the tag styles inside of the head of
            the HTML document, like here:
          </p>
          <img src={internal} alt="Interncal CSS" />
          <p>
            As CSS codes can get really big, we also almost never uses this, the
            last one is actually the most used
          </p>
          <li>External</li>
          <p>
            Last and most important, is the external way. We create a external
            CSS file and link with the HTML file, this is by far the most used
            way, this is how you can link those two documents:
          </p>
          <br />
          <img src={external} alt="External CSS" />
          <p>
            Importante note: this is the most popular way of using CSS, but
            there's actually of ways of doing it, you have CSS framewokrs like
            Tailwind and Bootstrap, there's also libs to include your CSS in a
            JS file like styled-components, but thees are topic for other
            leassons.
          </p>
        </ul>
      </article>
      <Footer />
    </div>
  );
}

export default IntroCSS;

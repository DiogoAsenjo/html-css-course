import properties from "../../assets/images/css-text/properties-text.png";
import links from "../../assets/images/css-text/links.png";
import "./css-text.css";
import Footer from "../../components/footer/footer.js";

function CSSText() {
  return (
    <div>
      <h1>CSS to style text and links</h1>
      <h2>Text</h2>
      <article>
        <p>
          As we learned in previous section, we can use CSS to style anything,
          and that includes text, obviously!
        </p>
        <br />
        <p>
          We have a lot of properties to style text, but below, I'll show you
          just the most used of them, but you can always check{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
          >
            MDN Documentation
          </a>{" "}
          for more information!
        </p>
        <div className="imgText">
          <img src={properties} alt="Properties for styling text" />
        </div>
        <p>
          Properties names is really easy to understand, if you understand a
          little bit of English, you will know exactly what each propertie do!
        </p>
        <h2>Links</h2>
        <p>
          Just like texts, we can also edit links, for that, we wil use those
          pseudoclasses that we talked before, here's one example:
        </p>
        <div className="imgLinks">
          <img src={links} alt="Styling links" className="links" />
        </div>

        <p>
          So, you saw that we can edit a lot of things about links, the style,
          the style after you clicked one time, while the cursor of the mouse is
          hovering the link e even the style while you're clicking, below you'll
          se the first link without any style and the second styled just like
          the image above:
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/diogoasenjo/"
              target="_blank"
              rel="noreferrer"
            >
              My Linkedin
            </a>
          </li>
          <li>
            <a
              className="styledLink"
              href="https://www.linkedin.com/in/diogoasenjo/"
              target="_blank"
              rel="noreferrer"
            >
              My Linkedin
            </a>
          </li>
        </ul>
      </article>
      <Footer />
    </div>
  );
}

export default CSSText;

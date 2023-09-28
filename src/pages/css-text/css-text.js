import properties from "../../assets/images/css-text/properties-text.png";

function CSSText() {
  return (
    <div>
      <h1>CSS to style text</h1>
      <p>
        As we learned in previous section, we can use CSS to style anything, and
        that includes text, obviously!
      </p>
      <br />
      <p>
        We have a lot of properties to style text, but below, I'll show you just
        the most used of them, but you can always check{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noreferrer"
        >
          MDN Documentation
        </a>{" "}
        for more information!
      </p>
      <img src={properties} alt="Properties for styling text" />
      <p>
        Properties names is really easy to understand, if you understand a
        little bit of English, you will know exactly what each propertie do!
      </p>
    </div>
  );
}

export default CSSText;

import "./border-margin-padding.css";
import border from "../../assets/images/border-margin-padding/border.png";
import border2 from "../../assets/images/border-margin-padding/border2.png";
import border3 from "../../assets/images/border-margin-padding/border3.png";

function BorderMarginPadding() {
  return (
    <div>
      <h1>Border Margin and Padding</h1>
      <p>
        In this section we're going to learn more about one of the most imortant
        things in CSS, border, margin and padding.
        <br />
        Those three are essential elements to organize your page and you'll need
        to master them to learn more complex CSS fundamentals like flexbox and
        grid.
      </p>
      <h2>Border</h2>
      <p>
        The first that we'll learn is border. Border is something like the frame
        of a painting. We can create and edit the border for every HTML tag.
        <br />
        In the beggining, will be very useful to create borders just to see
        exacly where exacly is your div in the page, so you can organize things
        in a better way.
        <br />
        Enough with explanations, let me show you how to create and manipulate
        your border:
      </p>
      <img src={border} alt="Using border in CSS" />
      <img src={border2} alt="Using border in CSS" />
      <img src={border3} alt="Using border in CSS" />
      <p>
        Those 3 images represents exacly the same border, but you can create in
        a differente way, the most used one is all in the same line, but it's
        nice to know that you can change the style or make only one of the sides
        of the div have a border.
        <br />
        Are you wondering how does the border look? Here it is then:
      </p>
      <p className="borderExample">
        Text inside of a border, just link the examples above!
      </p>
    </div>
  );
}

export default BorderMarginPadding;

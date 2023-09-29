import "./box-model.css";
import border from "../../assets/images/border-margin-padding/border.png";
import border2 from "../../assets/images/border-margin-padding/border2.png";
import border3 from "../../assets/images/border-margin-padding/border3.png";
import boxModel from "../../assets/images/border-margin-padding/box-model.jfif";
import Footer from "../../components/footer/footer";

function BoxModel() {
  return (
    <div>
      <h1>Box Model</h1>
      <p>
        In this section we're going to learn more about one of the most imortant
        things in CSS: Box Model and for that, we will start seeing more about{" "}
        <strong>border, margin and padding.</strong>
        <br />
        Those three are essential elements to organize your page and you'll need
        to master them to learn more complex CSS fundamentals like flexbox and
        grid.
      </p>
      <h2>Box Model</h2>
      <p>
        But first, let's start with what Box Model actually is, it defines how
        elements are displayed on a webpage and how they are sized.
        <br />
        Everything in CSS can be seen as a rectangle box, and every one of them
        have a border, a margin and a padding, that's why we will learn all of
        those concepts. Here we have a image that illustrate how box model
        actually works:
      </p>
      <img src={boxModel} alt="Box Model" />
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
      <h2>Padding</h2>
      <p>
        Padding is an insvisible space between the content and the border.
        Sometimes when you create a border, you don't want the content inside
        touching the border, that's why you defines a padding.
        <br />
        Just like the border, we can define a padding for top, bottom, left and
        right, and you also give the properties values in pixel, so this time I
        won't show you an example.
        <br />
        Below, there's an example just like the border example, but with a
        padding defined, as you can see, the content is a little bit distant
        from the border!
      </p>
      <p className="paddingExample">
        Text inside of a border, but with a padding!
      </p>
      <h2>Margin</h2>
      <p>
        Last but no least, we will see about margin, it basically is what
        separate elements in the page. While padding is the distance between the
        content and the border, margin is the distance between two border of two
        different elements.
      </p>
      <div className="marginExample">
        <p>Element 1</p>
        <p>Element 2</p>
      </div>
      <div className="marginExample2">
        <p>Element 1</p>
        <p>Element 2</p>
      </div>
      <p>
        In the first exmaple, we have the dafult margin, in the second, we have
        a 40px margin. As you can see, the elements in the second are far away
        from the border, that's because, each one of them have a margin!
      </p>
      <Footer />
    </div>
  );
}

export default BoxModel;

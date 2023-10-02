import Footer from "../../components/footer/footer";
import "./flexbox.css";
import parentElement from "../../assets/images/flexbox/parent-element.png";
import containerProps from "../../assets/images/flexbox/flex-container.png";
import elementProps from "../../assets/images/flexbox/flex-items.png";

function Flexbox() {
  return (
    <div>
      <h1>Flexbox</h1>
      <p>
        Flexbox is an important thing while talking about positioning items in
        CSS, so you gotta be really careful in this section and make sure you
        understand everything before moving on!
        <br />
        To use flexbox you need to use display propertie and select flex in a
        parent element, also called flex container. A parent element is a HTML
        tag that contains other elements inside of it, the child elements, also
        called flex items. Something like this:
      </p>
      <div className="imgFlexbox imgF1">
        <img src={parentElement} alt="Parent element example" />
      </div>
      <p>
        As you see, inside of Parent Element, we have a lot of other divs, as we
        want to control how these divs will display on our screen we will use
        display flex propertie.
        <br />
        When we create an HTML/CSS page, for standard the elements are shown
        vertically, as we use the display flex, the container will be shown
        horizontally. This will save us a lot of time as we can align items,
        justify their content and a lot of other things, here are some of the
        most used flex container properties.
      </p>
      <h2>Flex container properties:</h2>
      <ul>
        <li>Display</li>
        <p>
          The essential, you need to select flex to be able to use flexbox.;
        </p>
        <li>Align Items</li>
        <p>
          You use align items vertically inside the div. You can use flex-start,
          to be at the top and flex-end to be at the end of the flex container.
        </p>
        <li>Justify content</li>
        <p>
          Useful for justifying the content. You can select space between or
          space around to keep the distance between all the elements equal.
        </p>
        <li>Gap</li>
        <p>Is the space between the elements inside of the flex container.</p>
        <li>Flex direction</li>
        <p>
          Define if we want the flexbox to be horizontally {"(standard)"} or
          vertically {"(column"}, we can also change the order of the elements
          by selectign reverse.
        </p>
        <li>Flex wrap</li>
        <p>
          If the itens inside of the flex container are too large, we create a
          new line with flex-wrap
        </p>
        <li>Align Content</li>
        <p>
          Can only be used if the flex-wrap is set as wrad, is used to align
          items if we have more than one line.
        </p>
      </ul>
      <p>Here are the container properties being used:</p>
      <div className="imgFlexbox imgF2">
        <img src={containerProps} alt="Container properties being used" />
      </div>
      <h2>Flex items properties:</h2>
      <p>
        Besides the properties that we saw above about flex container, we can
        also select a single flex element and position it different than the
        rest of the elements, for that we have special flex items properties:
      </p>
      <ul>
        <li>Align self</li>
        <p>
          Is the same as align items frm the flex container, but for the
          specific element only
        </p>
        <li>Order</li>
        <p>
          You can change the order that the element is shown in the screen. By
          default, all itens inside the container have the order set as 0, don't
          matter how many elements we have. If we want the element to be shown
          before you need to set a lower number, if after, a bigger one.
        </p>
        <li>Flex basis</li>
        <p>
          With the flex basis propertie, we can define a commom width for all
          the flex items inside of the flex container
        </p>
        <li>Flex shrink</li>
        <p>
          Flex shrink is closed related to flex basis. It basically allow CSS to
          make all the elements fits inside of the flex container, so, even if
          you put a giant width, flex shrink won't allow them to be bigger than
          the container, but, if you switch this propertie to 0,{" "}
          {"1 is the default value"} the elements can be bigger than their
          parent.
        </p>
        <li>Flex grow</li>
        <p>
          Is the opossite of flex shrink, it make all elements bigger to fit
          exactly in the container.
        </p>
        <li>Flex</li>
        <p>
          Flex is a combination of all the last three, but only in one line,
          first value is grow, the second is shrink and the last is basis.
        </p>
      </ul>
      <p>Here are the items properties being used:</p>
      <div className="imgFlexbox imgF3">
        <img src={elementProps} alt="Elements properties being used" />
      </div>
      <p>
        There's a very useful game to train you Flex Box skills, you can check
        it here:{" "}
        <a href="https://flexboxfroggy.com/" target="_blank" rel="noreferrer">
          Flexbox Froggy
        </a>
      </p>
      <Footer />
    </div>
  );
}

export default Flexbox;

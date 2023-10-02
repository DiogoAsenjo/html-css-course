import "./flexbox.css";
import parentElement from "../../assets/images/flexbox/parent-element.png";

function Flexbox() {
  return (
    <>
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
      <img src={parentElement} alt="Parent element example" />
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
        <ul>
          <li>Display</li>
          <p>
            The essential, you need to select flex to be able to use flexbo.;
          </p>
          <li>Align Items</li>
          <p>
            You use align items vertically inside the div. You can use
            flex-start, to be at the top and flex-end to be at the end of the
            flex container.
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
          <li>Align Items</li>
          <p>
            Can only be used if the flex-wrap is set as wrad, is used to align
            items if we have more than one line.
          </p>
        </ul>
      </p>
    </>
  );
}

export default Flexbox;

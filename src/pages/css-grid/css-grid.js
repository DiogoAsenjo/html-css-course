import "./css-grid.css";
import grid from "../../assets/images/css-grid/grid.png";
import gridConcept from "../../assets/images/css-grid/grid-concepts.png";
import Footer from "../../components/footer/footer";

function CSSGrid() {
  return (
    <div>
      <h1>CSS Grid</h1>
      <p>
        Just like in Flexbox, in CSS Grid we have the Grid container and Grid
        itens. And guess what? Instead of declaring the propertie display: flex,
        we use the display: grid.
        <br />
        After we create a grid we have to set the grid-template-columns
        propertie, wich is the one that we define the size of every column
        present in our grid.
        <br />
        We can alo set the height of each row, for that, we use the
        grid-template-rows to set it.
        <br />
        Just like in flexbox, we can also set up a gap to keep the elements
        aparte from each other. But instead of the gap, we can uso column gap or
        wor-gap, to se the distance from columns and rows.
        <br />
        With that being said, should I stop using Flexbox and just use CSS Grid?
        NO! If you need a 1D layout you should use Flexbox and if you need a 2D
        use CSS Grid.
      </p>
      <div className="imgGrid">
        <img src={grid} alt="Creating a grid in CSS" />
      </div>
      <h2>Grid Lines and Cells</h2>
      <p>
        In Grid, we have something called Grid Lines and Grid Cells, instead of
        explainning it, it'll be easier to just show an image with the concept
      </p>
      <div className="imgGridConcept">
        <img src={gridConcept} alt="Grid concepts" />
      </div>
      <h2>Grid container properties</h2>
      <ul>
        <li>Grid template rows/columns</li>
        <p>
          Set the number of rows/columns that we want to create. We can use
          pixels as usual, but there is a nice value we can use, the "fr", it
          means fraction, with this value, each fraction of the row or column
          will have the size to fill the entire container.
          <br />
          Example: if we hava 3 columns with 1fr value for each, all of them
          will have the same measure, but if we put 3 columns, but with 1fr 2fr
          and 1fr, the middle collumn will represente 2 fractions of the whole
          area and each of the other 2 rows will fill the rest.
        </p>
        <li>Gap</li>
        <p>
          As we already said, we have the row-gap and column-gap propertie, to
          define the space between rows and columns
        </p>
        <li>Justify and Align content</li>
        <p>
          Just like in Flexbox, you can use those properties to organize items
          inside of grid cells.
        </p>
      </ul>
      <h2>Grid items properties</h2>
      <ul>
        <li>Column and row</li>
        <p>
          We can set the start and the endline do place a grid item. At the end
          of the section, I'll put an image of how you do it, but an easy way to
          think about positioning grid cells is to think about battleship, it's
          the same logic.
        </p>
        <li>Justify and Align self</li>
        <p>
          Just like in Flexbox, we can use this properties to overwrite the
          justify and align from the Grid container, just for the selected cell.
        </p>
      </ul>
      <Footer />
    </div>
  );
}

export default CSSGrid;

import image from "../../assets/images/basic-html/learn.png";
import Footer from "../../components/footer/footer";
import "./basic-html.css";

function Basic() {
  return (
    <div>
      <header>
        <h1>Basic fundamentals for HTML</h1>
      </header>
      <article>
        <h2>Head and body tag</h2>
        <p>
          Everything that we see here in the browser is inside of the body tag.
          <br />
          Everything that we don't see, is inside of head. With React, basically
          everything is inside of the body.7
          <br />
        </p>

        <h2>h, p and text tags</h2>
        <p>
          There are 6 h tags, goes from 1 to 6, we use in titles, like we did
          above and at the top of the page.
          <br />
          We use p tags to write normal paragraphs, like this one!
          <br />
          <p>We can use:</p>
          <ol>
            <li>
              <strong>strong tag, to put the text bold</strong>
            </li>
            <li>
              <em>em tag tu keep italice, em comes from emphasize</em>
            </li>
            <li>
              ol to create a list like this one, we need to put everything
              inside of it
            </li>
            <li>li for each element os the list, like here!</li>
          </ol>
          <p>Unoerdered lists</p>
          <ul>
            <li>
              We can crete unoerdered lists, likes these, insted of ol tag, user
              ul
            </li>
            <li>For elementes, we keep using li tag</li>
          </ul>
          <h2>Using images</h2>
          <p>
            For using images, we should use the img tag, it's an autoclose tag
            and we should use attributes, like src for the source of the image
            and alt, for an alternative text for the image
          </p>
          <img src={image} alt="learn html" width="500" height="200" />
        </p>
        <h2>Using links</h2>
        <p>
          We can also include links in HTML files, for that we use "a" tag,
          inside of it we put the text that we want, and we also should put the
          attribute href to user the link, just like below. We can use the
          target="_blank" propertie to open the link in a new tab an keep ours
          open!
          <br />
          If we have more than one link, we can use the nav tag to keep them all
          together
        </p>
        <nav>
          <a
            href="https://www.linkedin.com/in/diogoasenjo/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/diogo_asenjo/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </nav>
        <h2>header and section tags</h2>
        <p>
          It's nice to have your html files divided in groups as you will need
          to style them in the future using CSS, for that we use some tags:
          <br />
          We can use section tags inside of each other, like, we can have a
          header inside of an article tag
        </p>
        <ul>
          <li>nav tag for links</li>
          <li>header for the top of the section</li>
          <li>footer for the bottom of the page</li>
          <li>article to put the whole article inside</li>
          <li>section for sections of the page</li>
          <li>div for divisions in the page</li>
        </ul>
        <h2>Semantic HTML</h2>
        <p>
          You have to use HTML tags in a semantic way, like, we have a lot of
          tags to use in the right context, like, instead of nav, we can use div
          when we have a lot of links.
          <br />
          The graphic result would be the same, but in terms of Google search,
          acessibily and some other things, using the right tag will be good for
          you
        </p>
      </article>
      <Footer />
    </div>
  );
}

export default Basic;

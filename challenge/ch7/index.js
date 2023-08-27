/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

function Header() {
    return (

        < header >
            <nav>
                <img src="./react-logo.png" alt="image" />
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header >
    )
}
function Body() {
    return (
        <div>
            <h1>I am excited to learn react</h1>

            <ol>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit. Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor <sit className="lorem2"></sit></li>
            </ol>
        </div>
    )
}
function Footer() {
    return (
        <footer>
            <p>© 2021 Negi development</p>
        </footer>
    )
}
function Part2() {
    return (
        <div>

            {/* <header>
                <nav>
                    <img src="./react-logo.png" alt="image" style={{ width: 40 }} />

                </nav>
            </header> */}
            <Header />
            {/* <h1>I am excited to learn react</h1>

            <ol>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit. Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Lorem ipsum dolor <sit className="lorem2"></sit></li>
            </ol> */}
            <Body />
            {/* <footer>
                <p>© 2021 Negi development</p>
            </footer> */}
            <Footer />
        </div>
    )
}
ReactDOM.render(<Part2 />, document.getElementById("root"))
/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */
const ekElement = (
    <div>
        <h1>I am trying to fix that how can we display a jsx content in html using append</h1>
        <ul>This is the unordered list
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit.</li>
        </ul>
    </div>
)


// document.getElementById("root").append(JSON.stringify(ekElement))


// Challenge: fix the code

// If we are not using cdn then i can't use ReactDOM but to use it i have to import it

ReactDOM.render(ekElement, document.getElementById("root"))


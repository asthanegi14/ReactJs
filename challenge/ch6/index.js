/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function Cpc() {
    return (
        <div>
            <ol>Why i am excited to learn react
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ol>
        </div>
    )
}

ReactDOM.render(<Cpc />, document.getElementById("root"))
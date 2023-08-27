function Header() {
    return (
        <nav>
            <div className="navbar">
                <img src="react-logo.png" alt="logo" />
                <h1>ReactFacts</h1>
            </div>
            <div>
                <h3>React-course-Project-01</h3>
            </div>
        </nav>
    )
}
function Body() {
    return (
        <div className="body">
            <h1>Fun facts about react</h1>
            <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit?</li>
                <li> Lorem ipsum dolor sit amet consectetur.</li><li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit?</li>

            </ul>
        </div>
    )
}
function App() {
    return (
        <div className="cont">
            <Header />
            <Body />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
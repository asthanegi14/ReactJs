import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
        <h1>Hi</h1>
        <li>A</li>
        <li>B</li>
        <li>C</li>
    </nav>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(navbar)

// this is same as above code
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)
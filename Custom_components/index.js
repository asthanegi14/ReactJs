function Fun(){
    return(
        <div>
    <img className="image" src="react-logo.png"/> 
    <h1>Fun fact about React</h1> 
    <ul>
    <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul> 
    </div>
    )
}
    

ReactDOM.render(<Fun/>, document.getElementById("root"))
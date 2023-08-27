import React from "react"

export default function Joke(props){
    return(
        <div>
            console.log(props);
            <h4>{props.setup}</h4>
            <p>{props.punchline}</p>
        </div>
    )
}


// function UseOfProp(props) {
//     // const name = "Astha"
//     // const surname = "Negi"
//     // const age = "20"
//     // const location = "Dehradun"

//     return (
//         <div>
//             {/* My name is {name} {surname}. I am {age} year old. I am from {location}. */}
//             My name is {props.name} {props.surname}. I am {props.age} year old. I am from {props.location}.
//         </div>
//     )
// }

function UseOfProp({ name, surname, age, location }) {
    return (
        <div>
            My name is {name} {surname}. I am {age} year old. I am from {location}.
        </div>
    )
}

ReactDOM.render(<UseOfProp name = "Astha" surname = "Negi" age = "20" location = "Dehradun"/>, document.getElementById("root"))
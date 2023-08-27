import React from "react"
import img from "../images/star.png";

export default function Card(props) {
    let badgeText;
    if(props.openSpots===0){
        badgeText = "SOLD OUT";
    }
    else if(props.location==="Online"){
        badgeText = "Online"
    }

       
    /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */


    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} alt="img" className="card--image" />
            <div className="card--stats">
                <img src={img} alt="img" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
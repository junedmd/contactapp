import React from "react";
import "./Contact.css"

export default function Contact( {name, mobile}){
    return(
        <>
       
        <div className="conatctCard">
            <h1> {name} </h1>
            <h2> { mobile}</h2>
        </div>
        
        </>
    )
}
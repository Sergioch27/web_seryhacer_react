import React from "react"



const Brand = (props) => {
    return (
        <a href="./index">
            <img src={props.logoimg} alt={props.alt}/>
        </a>
    )
}

export default Brand
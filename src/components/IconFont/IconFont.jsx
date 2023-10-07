import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
const IconFont = (props) => {
    return (
    <button className={props.className}>
        {props.label}
        <FontAwesomeIcon icon={props.icon}/>
    </button>
    )
}

export default IconFont
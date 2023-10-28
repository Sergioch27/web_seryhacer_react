import React from "react";
import { NavLink } from 'react-router-dom'

const CategoryItem = () => {

    return (
        <ul>
            <li>
                <NavLink to='/category/Accion' >Accion</NavLink>
                <NavLink to='/category/SeryHacer' >SeryHacer</NavLink>
                <NavLink to='/category/Reflexion' >Reflexion</NavLink>
            </li>
        </ul>
    )
}
export default CategoryItem
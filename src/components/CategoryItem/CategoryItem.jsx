import React from "react";
import { NavLink} from 'react-router-dom'
import './Categoryitem.css';

const CategoryItem = () => {

    return (
        <>
         <div className="categoryList">
            <ul>
                <li>
                <NavLink to='/category/SeryHacer'>SeryHacer</NavLink>
                </li>
                <li>
                <NavLink to='/category/Reflexion'>Reflexion</NavLink>
                </li>
                <li>
                <NavLink to='/category/Accion'>Accion</NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}


export default CategoryItem
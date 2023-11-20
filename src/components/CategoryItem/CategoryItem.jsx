import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import './Categoryitem.css';

import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'
import { useEffect, useState } from 'react'


const CategoryItem = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))
        
        getDocs(categoriesRef)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields}
                })

                setCategories(categoriesAdapted)
            })
    }, [])

    return (
        <>
                            <div className="categoryList">
            <ul>
                <li>
                    {
                    categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? classes.active : ''}>{cat.name}</NavLink>)
                    }
                </li>
            </ul>
        </div>

            <section>
                {
                }
            </section>
        </>
    )
}
export default CategoryItem
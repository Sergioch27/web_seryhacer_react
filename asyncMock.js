import { useEffect } from "react"

const BaseUrl = "https://api.espacioseryhacer.com/api/"; // direccion base del API. es una api levantada por mi en STRAPI.

const  getprompt = async () => {
    useEffect(()=> {
        const ListProducts = BaseUrl + 'products?populate=img'
            try {
                fetch (ListProducts) {
                    
                }
                .then (response => {
                    return response.json()
                })
            }
    )
}
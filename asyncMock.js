const BaseUrl = "https://api.espacioseryhacer.com/api/"; // direccion base del API. es una api levantada por mi en STRAPI.

export const  GetProduct = async () => {
            try {
                const ListProducts = BaseUrl + 'products?populate=img'
                const DataProduct = await fetch (ListProducts, {
                    method: 'GET',
                    headers:{
                        'Content-type': 'application/json'
                    }
                })
                const response = await DataProduct.json();
                // console.log(JSON.stringify(response));
                return  response.data;
            }
            catch (err) {
                console.log("Error obteniendo datos", err);
                throw err;
            }
}

export const GetProductById = async (ItemId) => {
    try {
        const IdProduct = BaseUrl + `products/${ItemId}?populate=img`
        const DataIdProduct = await fetch (IdProduct,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const response = await DataIdProduct.json();
        return response.data;
    }
    catch (err){
        console.log("Error en consulta", err);
        throw err
    }
}
export const GetProductByCategory = async (categoryId) =>{
    try {
        const ListProducts = BaseUrl + 'products?populate=img'
        const DataProduct = await fetch (ListProducts, {
            method: 'GET',
            headers:{
                'Content-type': 'application/json'
            }
        })
        const response = await DataProduct.json();
        console.log(response);
        return response.data.filter((prod) => prod['attributes']['categoryName'] === categoryId);}
    catch (err) {
        console.log("Error obteniendo datos", err);
        throw err;
    }
}
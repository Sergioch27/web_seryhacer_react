import { createAdaptedProducts } from "../../../adapters/createAdaptedProducts"
import { db } from "../firebaseConfig"
import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore"

export const GetProduct =  (categoryId)=> {
    
return new Promise((resolve,reject)=>{ 
    const productsRef = categoryId
    ? query(collection(db, 'Products'), where('categoryName', '==', categoryId))
    : collection(db, 'Products')
getDocs(productsRef)
    .then(QuerySnapshot=>{
        console.log(QuerySnapshot)
       const productsAdapted = QuerySnapshot.docs.map(documentSnapshot=>{
        return createAdaptedProducts(documentSnapshot)
       })
       console.log(productsAdapted)
       resolve(productsAdapted);
    })
    .catch (err=>{
        reject(err)
    })
})
}

export const getProductById = (ItemId) => {
    const productRef = doc(db, 'Products', ItemId)

    return getDoc(productRef)
                .then(documentSnapshot => {
                    return createAdaptedProducts(documentSnapshot)
                })
                .catch(error => {
                    return error
                })
}
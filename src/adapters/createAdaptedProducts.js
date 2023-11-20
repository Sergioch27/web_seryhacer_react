export const createAdaptedProducts = (doc) => {
    const fields = doc.data()

    return {
        id: doc.id,
        title: fields.title,
        images: fields.images,
        categoryName: fields.categoryName,
        price: fields.price,
        description: fields.description
    }
}
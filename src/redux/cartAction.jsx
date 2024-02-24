export function addtocart(id, name, price, image){
    return{
        type: "Add_Item_To_Cart",
        item: {
            id: id,
            name: name,
            price: price,
            image: image
        }
    }
}

export function removefromcart(id){
    return{
        type: "Remove_Item_From_Cart",
        id: id,
       
    }
}
async function createItem(name,price,quantity){
    return{
        name,
        price,
        quantity,
        subtotal: () =>{return price * quantity},
    }
}

export default createItem;

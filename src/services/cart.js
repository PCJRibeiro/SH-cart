

async function addItem(userCart,item){
    userCart.push(item)
}

async function deleteItem(userCart, name){
    const index = userCart.findIndex((item)=> item.name === name)

    if(index >= 0){
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart,item){
    const indexFound = userCart.findIndex((product)=> product.name===item.name)

    if(indexFound == -1){
        console.log("item não encontrado")
        return
    }

    if(userCart[indexFound].quantity >1){
        userCart[indexFound].quantity--;
        return
    }
    else if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound,1)
        return
    }
}

async function listCart(userCart) {
    console.log("\nCarrinho shop:")

    userCart.forEach((item,index) => {
        console.log(`${index+1}. ${item.name} - RS${item.price} | ${item.quantity} | Subtotal = ${item.subtotal()}`)
    });
}

async function total(userCart){
    console.log("\nTotal cart:")
    const result = userCart.reduce((total,item)=>total + item.subtotal(),0)
    console.log(result)
}

export{
    addItem,
    total,
    deleteItem,
    removeItem,
    listCart
}
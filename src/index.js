import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = [];
const whishList = []



const item1 = await createItem("caneca",10.99,2);
const item2 = await createItem("papel", 2.99, 3);
const item3 = await createItem("lapis", 4.00, 4);


await cartService.addItem(myCart,item1)
await cartService.addItem(myCart,item2)
await cartService.addItem(myCart,item3)

await cartService.listCart(myCart)

await cartService.deleteItem(myCart,item1.name)
await cartService.removeItem(myCart,item3)

await cartService.listCart(myCart)
await cartService.total(myCart)

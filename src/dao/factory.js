import mongoose from "mongoose";
import config from '../config/config.js'
export let Carts
export let Products
export let Users
export let Tickets
switch (config.PERSISTENCE) {
    case "MONGO":
        const connection = mongoose.connect(config.URI)
        const { default: CartsManager } = await import('./classes/cartManagerMongo.js')
        const { default: ProductManager } = await import('./classes/productManagerMongo.js')
        const { default: UserManager } = await import('./classes/userManagerMongo.js')
        const { default: Tickets } = await import('./classes/ticketManagerMongo.js')
        Carts = CartsManager
        Products = ProductManager
        Users = UserManager
        Tickets = Tickets
        break;
    case "MEMORY":
        const { default: CartsMemory } = await import("./memory/carts.memory.js")
        const { default: ProductsMemory } = await import("./memory/products.memory.js")
        const { default: UsersMemory } = await import("./memory/users.memory.js")
        const { default: TicketsMemory } = await import("./memory/tickets.memory.js")
        Carts = CartsMemory
        Products = ProductsMemory
        Users = UsersMemory
        Tickets = TicketsMemory
        break
    default:

}
import { Product } from "./Product.js";
import { User } from "./User.js";

const user = new User("Murilo Fischer", "mfischer74@gmail.com", "123456");
console.log(user.login("mfischer74@gmail.com", "1234556"));
const newProduct = new Product("Smartphone", "Aparelho celular", 3600);
newProduct.addToStock(10);
console.log(newProduct.inStock);
console.log(`R$${newProduct.calculateDiscount(10)}`);

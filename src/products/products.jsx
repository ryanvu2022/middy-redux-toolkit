import images from "../products/images";
import { faker } from "@faker-js/faker";

export const products = images.map((image, index) => ({
   id: index,
   name: faker.commerce.productName(),
   price: faker.commerce.price(50, 100, 0),
   image: image,
   inStock: faker.datatype.boolean(),
   fastDelivery: faker.datatype.boolean(),
   ratings: faker.commerce.price(1,5,0),
   description: faker.commerce.productDescription() + ". " + faker.commerce.productDescription() + ".",
   numberOfRatedPeople: faker.commerce.price(1,30,0),
}))
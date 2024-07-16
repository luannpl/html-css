import ProductCard from "./components/ProductCard.js";

let productList = document.getElementById("product-list");

let product = [
  {
    name: "Iphone 14",
    price: "4000",
    storage: "128gb",
    color: "blue"
  },
  {
    name: "Iphone 13",
    price: "3000",
  },
];


for(let i = 0; i<product.length; i++){
    productList.innerHTML += ProductCard(product[i]);
}

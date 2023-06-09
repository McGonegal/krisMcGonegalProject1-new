
// parse Database Object.
//  forEach "product" in the database
//  
// create article (contains product)
// create  div (contains product img)
// create img (product img)
// create div2 (contains h3, p1 ,p2,button)
// create <h3>
// create p1 (Description)
// create p2 (price)
// create button (addToCart)
//  img.src = product.src

import {app} from './firebase.js';
import {getDatabase, ref, onValue, update, push, get} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js';

const database = getDatabase(app);
const dbref = ref(database);


onValue(dbref,(data)=>{
    console.log(data);
    const products = [];
    if(data.exists()){
        const payload = data.val().products
        console.log(payload);
        for(let product in payload){
            products.push(payload[product]);
        }
    };
    displayProducts(products);
});


const displayProducts = (productsArr) =>{
    let node = "";
    productsArr.forEach((product)=>{
        //creating the required elements for the listing.
        const productArticle = document.createElement(`article`);
        const imgContainer = document.createElement(`div`);
        const productInfoContainer = document.createElement(`div`);
        const img = document.createElement(`img`);
        const productTitle = document.createElement(`h3`);
        const description = document.createElement(`p`);
        const price = document.createElement(`p`);
        const addToCartBtn = document.createElement(`button`);
        // assigning img src and alt from the firebase realtime database.
        img.src = product.img;
        img.alt = product.alt;

        productTitle.innerText = product.product;
        description.innerText = product.description;

        productArticle.appendChild(imgContainer);
        imgContainer.appendChild(img);
        productArticle.appendChild(productInfoContainer);
        productInfoContainer.appendChild(productTitle);
        productInfoContainer.appendChild(description);
        productInfoContainer.appendChild(price);
        productInfoContainer.appendChild(addToCartBtn);

        productArticle.classList(`productArticle`)
        imgContainer.classList(`vegetableImage`)
        price.classList(`price`);
        addToCartBtn.classList(`productButton`)
    });
};





import React from "react";
import Product from './product'
import { PRODUCTS } from "../../data/products";
const Shop =() => {
return(
    <React.Fragment>
   <html lang="en" dir='ltr'></html>
    <h1>Shop</h1>
    <div className="row">
        {PRODUCTS.map((productData)=> (
         <Product key={productData.id} data={productData} />
        ))}
    </div>
    </React.Fragment>
);
};
export default Shop;
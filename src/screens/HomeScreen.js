import { useState } from "react";
import productData from "../utils/productData.json";
import ProductCard from "./ProductCard";

const HomeScreen = () => {

    const [productList, setProductList] = useState(productData);
    console.log("productData ----->", productList)

  return (
    <>
    {
      productList.map((product) => (
        <ProductCard key={product["_id"]} product={product} />
      ))
    }
    </>
  )
}

export default HomeScreen
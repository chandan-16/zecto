import { useState } from "react";
import productData from "../utils/productData.json";
import ProductCard from "./ProductCard";

const HomeScreen = () => {

    const [productList, setProductList] = useState(productData);

  return (
    <div className="px-10 flex flex-wrap mx-auto">
        <h2 className="w-full text-3xl tracking-widest font-semibold">LATEST PRODUCTS</h2>
    {
      productList.map((product) => (
        <ProductCard key={product["_id"]} product={product} />
      ))
    }
    </div>
  )
}

export default HomeScreen
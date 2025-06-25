import Rating from "../components/Rating.js"

const ProductCard = ({product}) => {
  return (
    <div className="shadow-lg px-4">
        <div>
            <img src={product.image} alt={product.name} className="py-2 w-70 rounded mt-2" />
        </div>

        <div className="mt-2">
            <a href="#" className="text-lg text-gray-500">{product.name}</a>
            <span className="text-lg text-gray-500"><Rating color="#f8e825" value={product.rating} text={`${product.numReviews} reviews`} />  {product.rating}</span>
            <p className="text-2xl font-semibold">₹{product.price}</p>
        </div>
    </div>
  )
}

export default ProductCard
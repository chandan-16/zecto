const ProductCard = ({product}) => {
  return (
    <div>
        <div>
            <img src={product.image} alt={product.name} />
        </div>

        <div>
            <a href="#">{product.name}</a>
            <p>{product.rating}</p>
            <p>Rs{product.price}</p>
        </div>
    </div>
  )
}

export default ProductCard
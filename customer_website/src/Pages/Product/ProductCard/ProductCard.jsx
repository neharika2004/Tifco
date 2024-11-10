import './ProductCard.css'; 
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Link to Product Details Page */}
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p>₹{product.price}.00</p>
        
        {/* Rating display: filled stars and empty stars */}
        <div className="rating">
          {'★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating))}
        </div>
      </Link>

      {/* Add to Cart Button */}
      <button
        className="add-to-cart"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;

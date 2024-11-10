import Filter from '../Filter/Filter';
import './ProductLayout.css'

const ProductLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="filters">
        <Filter />
      </div>
      <div className="product-list">
        {children} 
      </div>
    </div>
  );
}

export default ProductLayout;
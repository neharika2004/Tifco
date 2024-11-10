import ProductLayout from './Product/ProductLayout/ProductLayout';
import SouthIndianFood from './Product/ProductList/SouthIndianFood';

const SouthIndian = () => {
  return (
    <>
      {/* Banner Section */}
      {/* <div className="banner-container">
        <img 
          src="path/to/your/banner-image.jpg" 
          alt="South Indian Food Banner" 
          className="banner-image"
        />
      </div> */}

      {/* Product Layout Section */}
      <ProductLayout>
        <SouthIndianFood />
      </ProductLayout>
    </>
  );
}

export default SouthIndian;

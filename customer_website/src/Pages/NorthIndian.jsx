import NorthIndianFood from './Product/ProductList/NorthIndianFood';
import ProductLayout from './Product/ProductLayout/ProductLayout';

const NorthIndian = () => {
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
            <NorthIndianFood/>
          </ProductLayout>
        </>
      );
}

export default NorthIndian
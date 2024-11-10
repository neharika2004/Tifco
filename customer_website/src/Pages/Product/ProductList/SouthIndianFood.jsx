import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css'; 

const southIndianProducts = [
  {
    id: 1,
    name: "Sambar Mix 200gms",
    price: 180,
    image: "path/to/sambar_mix.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Authentic Madarasi Sambar",
    price: 180,
    image: "path/to/authentic_madarasi_sambar.jpg",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Karnataka Sambar",
    price: 180,
    image: "path/to/karnataka_sambar.jpg",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Parupu Rasam Mix 200gms",
    price: 180,
    image: "path/to/parupu_rasam.jpg",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Pepper Rasam Mix 200gms",
    price: 180,
    image: "path/to/pepper_rasam.jpg",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Coconut Milk Rasam 200gms",
    price: 200,
    image: "path/to/coconut_milk_rasam.jpg",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Veg Paneer Gravy Mix 200gms",
    price: 200,
    image: "path/to/veg_paneer_gravy.jpg",
    rating: 4.6,
  },
  {
    id: 8,
    name: "Vathakuzambu Mix 200gms",
    price: 180,
    image: "path/to/vathakuzambu.jpg",
    rating: 4.7,
  },
  {
    id: 9,
    name: "Pepper Curry Leaves Kuzambu 200gms",
    price: 180,
    image: "path/to/pepper_curry_leaves_kuzambu.jpg",
    rating: 4.5,
  },
  {
    id: 10,
    name: "Avail Mix 200gms",
    price: 180,
    image: "path/to/avail_mix.jpg",
    rating: 4.6,
  },
  {
    id: 11,
    name: "Poricha Kuttu Mix 200gms",
    price: 180,
    image: "path/to/poricha_kuttu_mix.jpg",
    rating: 4.4,
  },
  {
    id: 12,
    name: "Bisibela Bath Mix 200gms",
    price: 180,
    image: "path/to/bisibela_bath_mix.jpg",
    rating: 4.8,
  },
  {
    id: 13,
    name: "Parupu Podi 200gms",
    price: 160,
    image: "path/to/parupu_podi.jpg",
    rating: 4.7,
  },
  {
    id: 14,
    name: "Garlic Parupu Podi 200gms",
    price: 160,
    image: "path/to/garlic_parupu_podi.jpg",
    rating: 4.5,
  },
  {
    id: 15,
    name: "Murungai Parupu Podi 200gms",
    price: 160,
    image: "path/to/murungai_parupu_podi.jpg",
    rating: 4.6,
  },
  {
    id: 16,
    name: "Regular Idly Melagai Podi",
    price: 160,
    image: "path/to/idly_melagai_podi.jpg",
    rating: 4.8,
  },
  {
    id: 17,
    name: "Karupu Kavuni Porridge Mix 250gms",
    price: 180,
    image: "path/to/karupu_kavuni_mix.jpg",
    rating: 4.5,
  },
  {
    id: 18,
    name: "Millet Sathumavu Mix 250gms",
    price: 180,
    image: "path/to/millet_sathumavu_mix.jpg",
    rating: 4.7,
  },
  {
    id: 19,
    name: "Rava Idly Mix 500gms",
    price: 260,
    image: "path/to/rava_idly_mix.jpg",
    rating: 4.9,
  },
  {
    id: 20,
    name: "ABC Malt Milk Mix 250gms",
    price: 270,
    image: "path/to/abc_malt.jpg",
    rating: 4.7,
  }
];

const SouthIndianFood = () => {
  return (
    <div className="product-grid">
      {southIndianProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default SouthIndianFood;

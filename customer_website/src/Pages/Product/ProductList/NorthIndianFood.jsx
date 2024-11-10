import ProductCard from '../ProductCard/ProductCard';

const northIndianProducts = [
    {
      id: 1,
      name: "Punjabi Chole Masala 200gms",
      price: 200,
      image: "path/to/punjabi_chole_masala.jpg",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Rajma Masala 200gms",
      price: 180,
      image: "path/to/rajma_masala.jpg",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Paneer Butter Masala Mix 200gms",
      price: 220,
      image: "path/to/paneer_butter_masala.jpg",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Dal Makhani Mix 200gms",
      price: 200,
      image: "path/to/dal_makhani_mix.jpg",
      rating: 4.8,
    },
    {
      id: 5,
      name: "Amritsari Aloo Paratha Mix 200gms",
      price: 150,
      image: "path/to/amritsari_aloo_paratha.jpg",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Sarson Ka Saag 200gms",
      price: 180,
      image: "path/to/sarson_ka_saag.jpg",
      rating: 4.7,
    },
    {
      id: 7,
      name: "Makki Ki Roti Mix 200gms",
      price: 140,
      image: "path/to/makki_ki_roti.jpg",
      rating: 4.5,
    },
    {
      id: 8,
      name: "Butter Chicken Masala Mix 200gms",
      price: 220,
      image: "path/to/butter_chicken_masala.jpg",
      rating: 4.9,
    },
    {
      id: 9,
      name: "Rogan Josh Masala Mix 200gms",
      price: 250,
      image: "path/to/rogan_josh.jpg",
      rating: 4.8,
    },
    {
      id: 10,
      name: "Bhindi Masala Mix 200gms",
      price: 180,
      image: "path/to/bhindi_masala.jpg",
      rating: 4.6,
    },
    {
      id: 11,
      name: "Kadai Paneer Mix 200gms",
      price: 200,
      image: "path/to/kadai_paneer.jpg",
      rating: 4.7,
    },
    {
      id: 12,
      name: "Tandoori Masala 200gms",
      price: 220,
      image: "path/to/tandoori_masala.jpg",
      rating: 4.9,
    },
    {
      id: 13,
      name: "Biryani Masala 250gms",
      price: 240,
      image: "path/to/biryani_masala.jpg",
      rating: 4.8,
    },
    {
      id: 14,
      name: "Punjabi Kadhi Mix 200gms",
      price: 170,
      image: "path/to/punjabi_kadhi_mix.jpg",
      rating: 4.5,
    },
    {
      id: 15,
      name: "Palak Paneer Mix 200gms",
      price: 180,
      image: "path/to/palak_paneer.jpg",
      rating: 4.7,
    },
    {
      id: 16,
      name: "Jeera Aloo Mix 200gms",
      price: 150,
      image: "path/to/jeera_aloo.jpg",
      rating: 4.6,
    },
    {
      id: 17,
      name: "Aloo Gobi Mix 200gms",
      price: 160,
      image: "path/to/aloo_gobi.jpg",
      rating: 4.4,
    },
    {
      id: 18,
      name: "Pindi Chana Masala 200gms",
      price: 200,
      image: "path/to/pindi_chana.jpg",
      rating: 4.7,
    },
    {
      id: 19,
      name: "Masala Bhindi Mix 200gms",
      price: 180,
      image: "path/to/masala_bhindi.jpg",
      rating: 4.5,
    },
    {
      id: 20,
      name: "Aloo Methi Mix 200gms",
      price: 160,
      image: "path/to/aloo_methi.jpg",
      rating: 4.6,
    }
  ];
const NorthIndianFood = () => {
    return (
      <div className="product-grid">
        {northIndianProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
  
  export default NorthIndianFood;
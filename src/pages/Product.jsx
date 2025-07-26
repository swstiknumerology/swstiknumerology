import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { FaHeart, FaShareAlt, FaStar, FaShoppingCart } from 'react-icons/fa';

import crystalBraceletImg from '../assets/crystal bracelet.png';
import yantraImg from '../assets/yantra.png';
import locketYantraImg from '../assets/locket yantra.png';
import vastuPyramidImg from '../assets/prymid.png';
import gemImg from '../assets/gem.png';
import rudrakshImg from '../assets/rudhraksh.png';

const products = [
  {
    name: 'Natural Pyrite Crystal Bracelet',
    image: crystalBraceletImg,
    price: 999,
    original_price: 1599,
    discount: 38,
    rating: 4.6,
  },
  {
    name: 'Copper Plate Siddh Shree Yantra ',
    image: yantraImg,
    price: 699,
    original_price: 1290,
    discount: 46,
    rating: 4.8,
  },
  {
    name: 'Bhoj Patra Surya Locket Yantra',
    image: locketYantraImg,
    price: 1800,
    original_price: 2700,
    discount: 34,
    rating: 4.7,
  },
  {
    name: 'Plus Value Pure Copper Pyramid',
    image: vastuPyramidImg,
    price: 3200,
    original_price: 4700,
    discount: 32,
    rating: 4.5,
  },
  {
    name: 'Natural Certified Panna Gemstone',
    image: gemImg,
    price: 21000,
    original_price: 29000,
    discount: 28,
    rating: 4.9,
  },
  {
    name: 'Original 5 Mukhi Nepali Rudraksha',
    image: rudrakshImg,
    price: 599,
    original_price: 1199,
    discount: 50,
    rating: 4.7,
  },
];

export default function Product() {
  return (
    <div className="bg-[#fff] min-h-screen flex flex-col">
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#06402B] mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Our Products
        </h1>
        
        <div className="w-46 h-1 bg-[#FFB823] mx-auto mt-4 mb-10 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.name} className="bg-[#fff] rounded-2xl shadow-lg border border-gray-200 flex flex-col p-4 transition-transform duration-300 hover:scale-105">
              {/* Image container */}
              <div className="relative mb-4">
                <img src={product.image} alt={product.name} className="h-48 w-full object-contain rounded-lg bg-[#FFF1CA] p-2" />
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all">
                    <FaHeart className="text-gray-500 hover:text-red-500" />
                  </button>
                  <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all">
                    <FaShareAlt className="text-gray-500 hover:text-blue-500" />
                  </button>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h2 className="text-lg font-bold text-[#06402B] mx-2  mt-1 mb-2 h-12" style={{fontFamily: 'sans-serif'}}>{product.name}</h2>
                
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-baseline">
                    <p className="text-2xl mx-2 font-bold text-gray-800">₹{product.price}</p>
                    <p className="text-md text-[#06402B] line-through">₹{product.original_price}</p>
                  </div>
                  <div className="bg-[#06402B] text-green-100 text-md font-bold px-2 py-1 rounded-full">
                    -{product.discount}%
                  </div>
                </div>

                <div className="flex items-center mx-2 mt-3 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                  ))}
                  <span className="text-[#06402B] text-sm ml-1">({product.rating})</span>
                </div>
              </div>

              <button className="w-62 bg-[#FFC107] text-black font-bold py-2 px-2 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 mx-2">
                <FaShoppingCart />
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 
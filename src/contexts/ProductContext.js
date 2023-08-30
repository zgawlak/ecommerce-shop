import React, { createContext, useState, useEffect } from 'react';
import productData from '../productData';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productData);
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
};

export default ProductProvider;

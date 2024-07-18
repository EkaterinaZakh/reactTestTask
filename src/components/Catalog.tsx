import React, { useEffect, useState } from 'react';
import AllBrands from './AllBrands';
import productsData from '../assets/products.json';
import ProductCard from './ProductCard';
import { ProductType } from '../types/ProductType';

export default function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <div className="catalog_main">
        <div className="brands_content">
          <AllBrands />
        </div>
        <div className="catalog">
          <h3>Catalog</h3>
          <div className="catalog_content">
            {products.length > 0 ? (
              products.map((product: ProductType) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

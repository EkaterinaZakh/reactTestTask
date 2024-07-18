import React from 'react';
import { ProductType } from '../types/ProductType';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product_card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>
        {product.regular_price.value} {product.regular_price.currency}
      </p>
    </div>
  );
};

export default ProductCard;

import React, { useEffect, useState } from "react";
import AllBrands from "./AllBrands";
import ProductCard from "./ProductCard";
import { ProductType } from "../types/ProductType";
import { useAppSelector } from "../hooks";
import { BrandsType } from "../types/BrandsType";

export default function Catalog() {
  const [selectedBrandCode, setSelectedBrandCode] = useState<string | null>(
    null
  );

  const allProducts = useAppSelector((state) => state.products.products);
  const allBrands = useAppSelector((state) => state.brands.brands);

  // Function to handle brand selection
  const handleBrandSelect = (brandCode: string) => {
    setSelectedBrandCode((prevCode) =>
      prevCode === brandCode ? null : brandCode
    );
  };

  // Filter products based on the selected brand code
  const filteredProducts = selectedBrandCode
    ? allProducts.filter((product) => {
        const brand = allBrands.find((el) => el.id === product.brand);
        return brand?.code === selectedBrandCode;
      })
    : allProducts;

  return (
    <>
      <div className="catalog_main">
        <div className="brands_content">
          <AllBrands
            brands={allBrands}
            onBrandSelect={handleBrandSelect}
            selectedBrandCode={selectedBrandCode}
          />
        </div>
        <div className="catalog">
          <h3>Catalog</h3>
          <div className="catalog_content">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product: ProductType) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  context="products"
                />
              ))
            ) : (
              <p>Products not found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

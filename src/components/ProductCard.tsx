import React, { useState } from "react";
import { ProductType, ConfigurableProduct } from "../types/ProductType";
import { useAppDispatch } from "../hooks";
import { addToCart, deleteFromCart } from "../redux/cartSlice";

interface ProductCardProps {
  product: ProductType;
  context: "products" | "cart"; // Context to determine if the card is in the products list or cart
}

const ProductCard: React.FC<ProductCardProps> = ({ product, context }) => {
  const dispatch = useAppDispatch();
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, number>
  >((product as ConfigurableProduct).selectedOptions || {}); // State to hold selected options for configurable products

  // Function to add the product to the cart
  const addToCardHandler = () => {
    if (product.type === "configurable") {
      const selectedVariant = product.variants.find((variant) =>
        variant.attributes.every(
          (attr) => selectedOptions[attr.code] === attr.value_index
        )
      );
      dispatch(
        addToCart({
          ...product,
          selectedVariant: selectedVariant
            ? selectedVariant.product
            : undefined,
          selectedOptions,
        })
      );
    } else {
      dispatch(addToCart(product));
    }
  };

  // Function to remove the product from the cart
  const removeFromCardHandler = (id: number) => {
    dispatch(deleteFromCart(id));
  };

  const handleOptionChange = (optionCode: string, valueIndex: number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionCode]: valueIndex,
    }));
  };

  // Render options for configurable products
  const renderConfigurableOptions = (product: ConfigurableProduct) => {
    return product.configurable_options.map((option) => (
      <div key={option.attribute_code} className="mb-3">
        {context === "products" ? (
          <select
            id={option.attribute_code}
            className="form-select"
            onChange={(e) =>
              handleOptionChange(option.attribute_code, Number(e.target.value))
            }
            value={selectedOptions[option.attribute_code] || ""}
          >
            <option value=""> {option.label}</option>
            {option.values.map((value) => (
              <option key={value.value_index} value={value.value_index}>
                {value.label}
              </option>
            ))}
          </select>
        ) : (
          <span>
            {option.values.find(
              (v) => v.value_index === selectedOptions[option.attribute_code]
            )?.label || "Not selected"}
          </span>
        )}
      </div>
    ));
  };

  return (
    <div className="product_card">
      <img src={`../assets${product.image}`} alt={product.title} />
      <div>
        <h5>{product.title}</h5>
        <p>{product.brand}</p>
        <p>
          {product.regular_price.value} {product.regular_price.currency}
        </p>
        {product.type === "configurable" && renderConfigurableOptions(product)}{" "}
        {/* Render options if configurable */}
        {context === "products" && (
          <button
            type="button"
            className="button list-group-item-action"
            onClick={addToCardHandler}
          >
            Add to cart
          </button>
        )}
        {context === "cart" && (
          <button
            type="button"
            className="button list-group-item-action"
            onClick={() => removeFromCardHandler(product.id)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

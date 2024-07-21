import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../hooks";
import { ProductType } from "../types/ProductType";
import ProductCard from "./ProductCard";

export default function Cart() {
  const cartProducts = useAppSelector((state) => state.cart.cart);
  const [amount, setAmount] = useState<{ [key: number]: number }>({});

  // Effect to initialize the quantity of each product to 1 when the cart changes
  useEffect(() => {
    const initialAmount = cartProducts.reduce(
      (acc, product) => {
        acc[product.id] = 1;
        return acc;
      },
      {} as { [key: number]: number }
    );

    setAmount(initialAmount);
  }, [cartProducts]);

  // Function to update the quantity of a specific product
  const updateAmount = (id: number, change: number) => {
    setAmount((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) + change, 1),
    }));
  };

  // Memoized total amount calculation for performance optimization
  const totalAmount = useMemo(() => {
    return cartProducts.reduce((sum, product) => {
      const quantity = amount[product.id] || 1;
      return sum + product.regular_price.value * quantity;
    }, 0);
  }, [cartProducts, amount]);

  return (
    <div className="container">
      <h2 className="my-4">Shopping Cart</h2>
      <div className="mb-4">
        {cartProducts.length > 0 ? (
          cartProducts.map((product: ProductType) => {
            const quantity = amount[product.id] || 1;
            const totalPrice = product.regular_price.value * quantity; /// Calculate total price for the product

            return (
              <div className="row border-bottom py-3" key={product.id}>
                <div className="col-12">
                  <div className="one_prod_info d-flex justify-content-evenly mt-2">
                    <div className="card_img">
                      <ProductCard product={product} context="cart" />
                    </div>
                    <div className="one_prod_card d-flex justify-content-between mt-2 gap-5">
                      <div className="d-flex flex-column align-items-center">
                        <h5>Price</h5>
                        <p>${product.regular_price.value.toFixed(2)}</p>
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <h5>Quantity</h5>
                        <div>
                          <button
                            className="button  me-2"
                            onClick={() => updateAmount(product.id, -1)}
                          >
                            -
                          </button>
                          <span className="me-2">{quantity}</span>
                          <button
                            className="button"
                            onClick={() => updateAmount(product.id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <h5>Total Price</h5>
                        <p>${totalPrice.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h4>Cart is empty</h4>
        )}
      </div>
      <div className="mt-4">
        <h4>Subtotal: ${totalAmount.toFixed(2)}</h4>
        <button type="button" className="button btn-primary">
          Checkout
        </button>
      </div>
    </div>
  );
}

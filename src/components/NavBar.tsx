import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";

export default function NavBar() {
  const prodNum = useAppSelector((state) => state.cart.cart);

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/assets/images/logo.png" alt="logo" />
          </Link>
          <div className="navbar_cart">
            <Link to="/cart">
              <img src="assets/images/cart.png" alt="cart" width={30} />
            </Link>
            {prodNum.length > 0 && <p>{prodNum.length}</p>}
          </div>
        </div>
      </nav>
    </>
  );
}

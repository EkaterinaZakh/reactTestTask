import logo from '../assets/images/logo.png';
import cart from '../assets/images/cart.png';

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={logo} alt="logo" />
          </a>
          <span>
            <img src={cart} alt="cart" />
          </span>
        </div>
      </nav>
    </>
  );
}

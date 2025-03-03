import {
  EarthLogoIcon,
  LogoIcon,
  CartIcon,
  CartHoverIcon,
  MenuIcon,
  CloseIcon,
} from "../../assets/icons/index";
import { useMenuToggle } from "../../utils/useMenuToggle";
import "./Header.sass";

export const Header = () => {
  const { menuRef, isOpen, handleClose, setOpen } = useMenuToggle();

  return (
    <header className="header" ref={menuRef}>
      <div className="header__icons">
        <img
          src={EarthLogoIcon}
          alt="earth-icon"
          className="header__icon-earth"
        />
        <img src={LogoIcon} alt="logo-icon" className="header__icon-logo" />
      </div>
      <nav
        className={`nav ${isOpen ? "nav--open" : ""}`}
        aria-label="Main navigation"
      >
        <ul className="nav__list">
          <li className="nav__item nav__item--hover-text" onClick={handleClose}>
            Home
          </li>
          <li className="nav__item nav__item--hover-text" onClick={handleClose}>
            Products
          </li>
          <li className="nav__item nav__item--hover-icon" onClick={handleClose}>
            <img src={CartIcon} alt="cart-icon" className="nav__icon" />
            <img
              src={CartHoverIcon}
              className="nav__icon--hover"
              alt="cart-hover-icon"
            />
          </li>
        </ul>
      </nav>

      <button
        className="header__menu-icon"
        onClick={() => setOpen((state) => !state)}
      >
        <img src={MenuIcon} alt="menu-icon" />
      </button>

      <button className="header__close-icon" onClick={handleClose}>
        <img src={CloseIcon} alt="close-icon" />
      </button>
    </header>
  );
};

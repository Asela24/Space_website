import earthIcon from "../../assets/EarthIcon.svg";
import logoIcon from "../../assets/LogoIcon.svg";
import cartIcon from "../../assets/CartIcon.svg";
import menuIcon from "../../assets/MenuIcon.svg";
import cartHoverIcon from "../../assets/CartHoverIcon.svg";
import closeIcon from "../../assets/CloseIcon.svg";
import { useRef, useEffect } from "react";

import "./Header.sass";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header" ref={menuRef}>
      <div className="header__icons">
        <img src={earthIcon} alt="earth-icon" className="header__icons-earth" />
        <img src={logoIcon} alt="logo-icon" className="header__icons-logo" />
      </div>
      <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
        <ul className="nav__list">
          <li className="nav__item nav__item-hover-text" onClick={handleClose}>
            Home
          </li>
          <li className="nav__item nav__item-hover-text" onClick={handleClose}>
            Products
          </li>
          <li className="nav__item nav__item-hover-icon" onClick={handleClose}>
            <img src={cartIcon} alt="cart-icon" className="nav__icon" />
            <img
              src={cartHoverIcon}
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
        <img src={menuIcon} alt="menu-icon" />
      </button>

      <button className="header__close-icon" onClick={handleClose}>
        <img src={closeIcon} alt="close-icon" />
      </button>
    </header>
  );
};

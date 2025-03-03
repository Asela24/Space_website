import "./App.sass";
import { cards } from "./cards";

import {
  EarthIcon,
  LogoIcon,
  CartIcon,
  CartHoverIcon,
  MenuIcon,
  CloseIcon,
  RocketIcon,
} from "./assets/icons/index";

import earthImage from "./assets/EarthImage.webp";

import { useMenuToggle } from "./useMenuToggle";
function App() {
  const { isOpen, setOpen, menuRef, handleClose } = useMenuToggle();

  return (
    <div className="App">
      <header className="header" ref={menuRef}>
        <div className="header__icons">
          <img
            src={EarthIcon}
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
            <li
              className="nav__item nav__item--hover-text"
              onClick={handleClose}
            >
              Home
            </li>
            <li
              className="nav__item nav__item--hover-text"
              onClick={handleClose}
            >
              Products
            </li>
            <li
              className="nav__item nav__item--hover-icon"
              onClick={handleClose}
            >
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
      <main className="main">
        <section className="banner">
          <div className="banner__info">
            <h3 className="banner__title">
              Discover the vast expanses of{" "}
              <span className="banner__highlight--pink">space</span>
            </h3>

            <p className="banner__description">
              Where the possibilities are{" "}
              <span className="banner__highlight--lemon">endless!</span>
            </p>

            <button className="button button--filled button--big">
              Learn more
            </button>
          </div>

          <div className="banner__image">
            <img src={earthImage} alt="earth-image" />
          </div>
        </section>
        <section className="content_sections">
          <section className="offers" aria-labelledby="offers-heading">
            <h3 className="offers__label">Offers</h3>
            <div className="cards_section">
              {cards.map((card) => (
                <article
                  className="card"
                  style={{
                    "--background-url": `url(${card.background})`,
                  }}
                >
                  <h4 className={`card__header card__header--${card.desktop}`}>
                    {card.header}
                  </h4>
                  <div className="card__description">{card.description}</div>

                  <button className="button button--outlined button--medium">
                    Learn more
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="info_section" aria-labelledby="info-heading">
            <h3 className="info_section__title">Embark on a space journey</h3>
            <p className="info_section__content">
              Travelling into space is one of the most exciting and
              unforgettable adventures that can change your life forever. And if
              you have ever dreamed of exploring stars, planets and galaxies,
              then our company is ready to help you realize this dream. We offer
              a unique experience that will allow you to go on a space journey
              and see all the secrets of the universe. We guarantee that every
              moment in space will be filled with incredible impressions,
              excitement and new discoveries. Our team of professionals takes
              care of your safety and comfort so that you can fully enjoy your
              adventure in space. We offer various options for space excursions.
            </p>
            <input
              type="checkbox"
              id="info_section__toggle"
              className="info_section__toggle"
            />

            <p
              className="info_section__content info_section__content--hidden"
              aria-hidden="true"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo conse
            </p>
            <label
              htmlFor="info_section__toggle"
              className="info_section__button"
            >
              <span className="info_section__text info_section__text--more">
                Read more
              </span>
              <span className="info_section__text info_section__text--less">
                Read less
              </span>
            </label>
          </section>
        </section>
      </main>

      <footer className="footer" aria-label="Footer">
        <img src={RocketIcon} alt="rocket-icon" />
        <span>Exciting space adventure</span>
      </footer>
    </div>
  );
}

export default App;

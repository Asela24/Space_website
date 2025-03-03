import "./App.sass";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import FirstCardBackground from "./assets/FirstCardBackground.png";
import SecondCardBackground from "./assets/SecondCardBackground.png";
import ThirdCardBackground from "./assets/ThirdCardBackground.png";
import FourthCardBackground from "./assets/FourthCardBackground.png";
import RocketIcon from "./assets/RocketIcon.svg";

const cards = [
  {
    header: "Move the borders of reality!",
    description: "Go on a space adventure - it's possible with us!",
    background: FirstCardBackground,
    desktop: "big",
  },
  {
    header: "Space is not just stars and planets",
    description: "Go on a space adventure",
    background: SecondCardBackground,
  },
  {
    header: "For those who dream of stars",
    description: "Our offer: make your dream come true",
    background: ThirdCardBackground,
  },
  {
    header: "Fulfill your fantastic dreams",
    description: "Space has never been so close",
    background: FourthCardBackground,
    desktop: "big",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Banner />
        <section className="content_sections">
          <section className="offers">
            <h3 className="offers__label">Offers</h3>
            <div className="cards_section">
              {cards.map((card) => (
                <Card key={card.header} {...card} />
              ))}
            </div>
          </section>

          <section className="space_journey">
            <h3 className="space_journey__title">Embark on a space journey</h3>
            <p className="space_journey__content">
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
              id="space_journey__toggle"
              className="space_journey__toggle"
            />

            <p className="space_journey__content space_journey__content--hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo conse
            </p>
            <label
              htmlFor="space_journey__toggle"
              className="space_journey__button"
            >
              <span className="space_journey__text space_journey__text--more">
                Read more
              </span>
              <span className="space_journey__text space_journey__text--less">
                Read less
              </span>
            </label>
          </section>
        </section>
      </main>

      <footer className="footer">
        <img src={RocketIcon} alt="rocket-icon" />
        <span>Exciting space adventure</span>
      </footer>
    </div>
  );
}

export default App;


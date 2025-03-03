import "./App.sass";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import RocketIcon from "./assets/RocketIcon.svg";
import { InfoSection } from "./components/InfoSection/InfoSection";
import { cards } from "./cards";
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

          <InfoSection />
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

export const InfoSection = () => (
  <section className="info_section">
    <h3 className="info_section__title">Embark on a space journey</h3>
    <p className="info_section__content">
      Travelling into space is one of the most exciting and unforgettable
      adventures that can change your life forever. And if you have ever dreamed
      of exploring stars, planets and galaxies, then our company is ready to
      help you realize this dream. We offer a unique experience that will allow
      you to go on a space journey and see all the secrets of the universe. We
      guarantee that every moment in space will be filled with incredible
      impressions, excitement and new discoveries. Our team of professionals
      takes care of your safety and comfort so that you can fully enjoy your
      adventure in space. We offer various options for space excursions.
    </p>
    <input
      type="checkbox"
      id="info_section__toggle"
      className="info_section__toggle"
    />

    <p className="info_section__content info_section__content--hidden">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo conse
    </p>
    <label htmlFor="info_section__toggle" className="info_section__button">
      <span className="info_section__text info_section__text--more">
        Read more
      </span>
      <span className="info_section__text info_section__text--less">
        Read less
      </span>
    </label>
  </section>
);

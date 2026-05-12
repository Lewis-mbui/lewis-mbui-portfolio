import PrimaryNav from "./PrimaryNav";

const IntroSection = () => {
  return (
    <section className="intro">
      <div className="intro__wrapper | wrapper grid">
        <PrimaryNav />
        <picture className="profile-container">
          <source media="(min-width: 900px)" srcSet="/lewis-desktop.webp" />
          <source media="(min-width: 720px)" srcSet="/lewis-tablet.webp" />
          <img src="/lewis-mobile.webp" alt="Profile photo" />
        </picture>

        <div className="intro__content | grid">
          <h1 className="intro__header | heading-xl">
            Nice to <br className="intro__break" />
            meet you! I'm <span className="decorate">Lewis Mbui</span>.
          </h1>
          <p>
            Based in Nairobi, Kenya - I'm a self-taught web developer passionate
            about building clean, responsive and user-friendly web applications.
            I enjoy turning ideas into real products while continuously
            improving my skills in modern frontend and backend development.
          </p>
          <a href="mailto: lewmugo14479@gmail.com" className="link">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

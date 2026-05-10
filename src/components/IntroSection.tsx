import PrimaryNav from "./PrimaryNav"

const IntroSection = () => {
  return (
    <section className="intro">
      <div className="intro__wrapper wrapper">
        <PrimaryNav />
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="/image-profile-desktop.webp"
          />
          <source
            media="(min-width: 600px)"
            srcSet="/image-profile-tablet.webp"
          />
          <img
            src="/image-profile-mobile.webp"
            alt="Profile photo"
          />
        </picture>

        <div className="intro__content">
          <h1 className="heading-xl">
            Nice to meet you! <span className="decorate">I'm Adam Keyes</span>.
          </h1>
          <p>
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <a href="mailto: lewmugo14479@gmail.com" className="link">Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
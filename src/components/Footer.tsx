import InquiryForm from "./InquiryForm"
import PrimaryNav from "./PrimaryNav"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper wrapper">
        <div className="footer__contact">
          <div className="footer__message">
            <h2 className="heading-xl">Contact</h2>
            <p>
              I would love to hear about your project and how I could help. Please
              fill in the form, and I’ll get back to you as soon as possible.
            </p>
          </div>
          <InquiryForm />

        </div>
        <PrimaryNav />
      </div>
    </footer>
  )
}

export default Footer
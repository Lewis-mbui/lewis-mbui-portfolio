import type { InquiryTouched } from "../contexts/InquiryProvider";
import useInquiryContext from "../hooks/useInquiryContext";
import validateInquiry from "../utils/validate-inquiry";
import FormField from "./FormField";

const InquiryForm = () => {
  const { state: { values }, dispatch } = useInquiryContext();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const err = validateInquiry(values);
    dispatch({ type: 'SET_ERROR', error: err })


    const allTouched: InquiryTouched = {};
    Object.keys(values).forEach((key) => {
      allTouched[key as keyof InquiryTouched] = true;
    });
    dispatch({ type: 'SET_ALL_TOUCHED', touched: allTouched })

    const allValid = Object.values(err).length === 0;

    if (allValid) {
      e.target.submit();
    }

  }

  return <form noValidate action="https://formspree.io/f/mrejjelq" method="POST" className="contact__form | grid" onSubmit={handleSubmit}>
    <FormField id='name' name='Name' type='text' placeholder="Name" />
    <FormField id='email' name='Email' type='email' placeholder="Email" />
    <FormField id='message' name='Message' type='textarea' placeholder="Message" />
    <button type="submit" className="link">Send message</button>
  </form>
};

export default InquiryForm;

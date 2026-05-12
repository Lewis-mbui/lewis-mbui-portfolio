import FormField from "./FormField";

const InquiryForm = () => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return <form noValidate action="https://formspree.io/f/mrejjelq" method="POST" className="contact__form | grid" onSubmit={handleSubmit}>
    <FormField id='name' name='Name' type='text' placeholder="Name" />
    <FormField id='email' name='Email' type='email' placeholder="Email" />
    <FormField id='message' name='Message' type='textarea' placeholder="Message" />
    <button className="link">Send message</button>
  </form>
};

export default InquiryForm;

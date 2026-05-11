import FormField from "./FormField";

const InquiryForm = () => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return <form noValidate action="" className="contact__form | grid" onSubmit={handleSubmit}>
    <FormField id='name' type='text' placeholder="Name" />
    <FormField id='email' type='email' placeholder="Email" />
    <FormField id='message' type='textarea' placeholder="Message" />
    <button className="link">Send message</button>
  </form>
};

export default InquiryForm;

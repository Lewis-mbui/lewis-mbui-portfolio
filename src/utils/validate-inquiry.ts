import type { Inquiry, InquiryErrors } from "../contexts/InquiryProvider";

const validateInquiry = (values: Inquiry): InquiryErrors => {
  const error: InquiryErrors = {};

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) {
    error.name = `Please enter name`;
  } else if (name.length < 2) {
    error.name = "Name should be at least 2 characters long";
  }

  if (!email) {
    error.email = `Please enter email`;
  } else if (!regex.test(email)) {
    error.email = "Please enter a valid email";
  }

  if (!message) {
    error.message = "Please enter message";
  } else if (message.length < 5) {
    error.message = "Message should be at least 5 characters long";
  }

  return error;
};

export default validateInquiry;

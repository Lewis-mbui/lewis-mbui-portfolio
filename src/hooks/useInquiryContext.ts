import { useContext } from "react";
import { InquiryContext } from "../contexts/InquiryProvider";

const useInquiryContext = () => {
  const context = useContext(InquiryContext);

  if (!context) throw Error("No value provided for Inquiry Provider");

  return context;
};

export default useInquiryContext;

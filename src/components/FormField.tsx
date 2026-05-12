import type { InquiryField } from "../contexts/InquiryProvider"
import useInquiryContext from "../hooks/useInquiryContext";

interface Props {
  id: InquiryField;
  name: string;
  type: 'email' | 'text' | 'textarea';
  placeholder: string;
}

const FormField = ({ id, type, placeholder, name }: Props) => {
  const { state: { values }, dispatch } = useInquiryContext();
  const fieldVal = values[id];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLTextAreaElement>) => {
    const newVal = e.target.value;
    dispatch({ type: 'SET_VALUE', field: id, value: newVal })
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newVal = e.target.value;
    dispatch({ type: 'SET_VALUE', field: id, value: newVal })
  }

  return (
    <div className="form-group">
      <div className="input-group">
        {type === 'textarea' ? (
          <textarea
            className="primary-input"
            placeholder={placeholder}
            id={id}
            value={fieldVal}
            onChange={handleMessageChange}
          />
        ) : (
          <input
            className="primary-input"
            placeholder={placeholder}
            type={type}
            id={id}
            name={name}
            onChange={handleChange}
          />
        )}
      </div>
      <p className="error-message">Sorry invalid format here</p>
    </div>)
}

export default FormField
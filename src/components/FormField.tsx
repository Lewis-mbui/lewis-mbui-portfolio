import type { InquiryField } from "../contexts/InquiryProvider"
import useInquiryContext from "../hooks/useInquiryContext";
import validateInquiry from "../utils/validate-inquiry";

interface Props {
  id: InquiryField;
  name: string;
  type: 'email' | 'text' | 'textarea';
  placeholder: string;
}

const FormField = ({ id, type, placeholder, name }: Props) => {
  const { state: { values, errors, touched }, dispatch } = useInquiryContext();
  const fieldVal = values[id];
  const error = errors[id];
  const isTouched = touched[id];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLTextAreaElement>) => {
    const newVal = e.target.value;
    const newValues = { ...values, [id]: newVal };
    const err = validateInquiry(newValues);

    dispatch({ type: 'SET_ERROR', error: err });
    dispatch({ type: 'SET_VALUE', field: id, value: newVal });
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newVal = e.target.value;
    const newValues = { ...values, [id]: newVal };
    const err = validateInquiry(newValues);

    dispatch({ type: 'SET_ERROR', error: err });
    dispatch({ type: 'SET_VALUE', field: id, value: newVal })
  }

  return (
    <div className="form-group">
      <div className={`input-group ${error && isTouched ? 'error' : ''}`}>
        {type === 'textarea' ? (
          <textarea
            className="primary-input"
            placeholder={placeholder}
            id={id}
            name={name}
            value={fieldVal}
            onChange={handleMessageChange}
            onBlur={() => dispatch({ type: 'SET_TOUCHED', field: id })}
          />
        ) : (
          <input
            className="primary-input"
            placeholder={placeholder}
            type={type}
            id={id}
            name={name}
            onChange={handleChange}
            onBlur={() => dispatch({ type: 'SET_TOUCHED', field: id })}
          />
        )}
      </div>
      {isTouched && error && <p className="error-message">{error}</p>}
    </div>)
}

export default FormField
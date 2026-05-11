import { createContext, useReducer, type Dispatch, type ReactNode } from "react";

export type InquiryField = "name" | "email" | "message";

type Inquiry = Record<InquiryField, string>;

type Action = { type: 'SET_VALUE', field: InquiryField, value: string };

const reducer = (state: Inquiry, action: Action): Inquiry => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, [action.field]: action.value };

    default: return state;
  }
}

interface InquiryContextType {
  inquiry: Inquiry;
  dispatch: Dispatch<Action>
}

export const InquiryContext = createContext<null | InquiryContextType>(null)

interface Props { children: ReactNode }

const InquiryProvider = ({ children }: Props) => {
  const [inquiry, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    message: ''
  })

  return (
    <InquiryContext.Provider value={{ inquiry, dispatch }}>
      {children}
    </InquiryContext.Provider>
  )
}

export default InquiryProvider
import { createContext, useReducer, type Dispatch, type ReactNode } from "react";

export type InquiryField = "name" | "email" | "message";

export type Inquiry = Record<InquiryField, string>;

export type InquiryErrors = Partial<Inquiry>;

export type InquiryTouched = Partial<Record<keyof Inquiry, boolean>>;

interface State {
  values: Inquiry;
  errors: InquiryErrors;
  touched: InquiryTouched;
}

type Action = { type: 'SET_VALUE', field: InquiryField, value: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, values: { ...state.values, [action.field]: action.value } };

    default: return state;
  }
}

interface InquiryContextType {
  state: State;
  dispatch: Dispatch<Action>
}

export const InquiryContext = createContext<null | InquiryContextType>(null)

interface Props { children: ReactNode }

const InquiryProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    values: {
      name: '',
      email: '',
      message: ''
    }, errors: {}, touched: {}
  })

  return (
    <InquiryContext.Provider value={{ state, dispatch }}>
      {children}
    </InquiryContext.Provider>
  )
}

export default InquiryProvider
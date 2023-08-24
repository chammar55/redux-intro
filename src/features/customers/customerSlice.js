const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payLoan.fullName,
        nationalID: action.payLoan.nationalID,
        createdAt: action.payLoan.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payLoan };
    default:
      return state;
  }
}

// we should place side-effects in function rather than in reducer
export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
}

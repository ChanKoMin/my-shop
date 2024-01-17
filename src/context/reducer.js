export const reducer = (state, action) => {
  const isExisted = state.carts.find((item) => item.id === action.payload.id);
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      if (isExisted) {
        return state;
      } else {
        return { ...state, carts: [...state.carts, { ...action.payload }] };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        carts: state.carts.filter((pd) => pd.id !== action.payload.id)
      };
    case "CLEAR_CART":
      return { ...state, carts: (state.carts = []) };
    default:
      return state;
  }
};

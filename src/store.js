export const initialStore = {
  contacts: [],
};

export default function storeReducer(state, action) {
  switch (action.type) {
    case "GET_CONTACTS":
      return {
        ...state,
        contacts: action.payload,
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    // ... otros casos si los necesitas localmente
    default:
      return state;
  }
}
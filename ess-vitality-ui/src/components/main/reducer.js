export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.value };
    case 'SET_OPEN':
      return { ...state, open: action.value };
    case 'SET_EDITABLE_FIELDS':
      return { ...state, editableFields: action.value };
    default:
      console.warn(`Action ${action.type} not handled!`);
      return state;
  }
};

export const initialValue = editableFields => ({
  data: [],
  open: false,
  editableFields,
});

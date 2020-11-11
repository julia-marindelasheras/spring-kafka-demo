export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, data: action.value };
    case 'SET_ACTIVE_ENV':
      return { ...state, open: action.value };
    default:
      console.warn(`Action ${action.type} not handled!`);
      return state;
  }
};

export const initialValue = defaultEnv => ({
  loading: false,
  activeEnv: defaultEnv,
});

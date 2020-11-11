export function openEditModal(data, dispatch, currentElement) {
  dispatch({
    type: 'SET_EDITABLE_FIELDS',
    value: data[currentElement],
  });
  dispatch({ type: 'SET_OPEN', value: true });
}
export async function onFetchData(props, state, dispatch, targetType) {
  dispatch({ type: 'SET_LOADING', value: true });
  try {
    props.mainDispatcher({
      // TODO: data needs to be read from
      value: props.parseConfigurations(
        "data",
        targetType ? targetType : state.activeEnv
      ),
      type: 'SET_DATA',
    });
    dispatch({ type: 'SET_LOADING', value: false });
  } catch (error) {
    console.error('error', error);
    dispatch({ type: 'SET_LOADING', value: false });
  }
}

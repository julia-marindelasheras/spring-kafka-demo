
export function onInputChanged(props, event) {
  const target = event.target;
  const name = target.name;
  const updatedEditableFields = {
    ...props.editableFields,
    [name]: target.value,
  };
  props.mainDispatcher({
    type: 'SET_EDITABLE_FIELDS',
    value: updatedEditableFields,
  });
}

export async function submit(props, toast, t) {
  try {

    const configuration = props.editableFields.key
    const checkedData = prepareConfigurationData(props, configuration.data)

    if (checkedData.data.check !== 'true') {
      return toast.showError({
        title: t('connections.error'),
        text: checkedData.data.message,
      });
    }

    props.onSuccess();
    toast.showSuccess({
      title: t('connections.success'),
      text: t('connections.save-success'),
    });
  } catch (error) {
    toast.showError({
      title: t('connections.error'),
      text: t('connections.error-format'),
    });
  }
}

export function prepareConfigurationData(props, configuration) {
  configuration.values = props.editableFields.values
    .split(',')
    .map(separatedValue => ({ id: null, value: separatedValue, tags: [] }));
  return configuration;
}

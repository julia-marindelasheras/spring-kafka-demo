export function parseConfigurations(configurations, targetType) {
  return configurations
    .filter(
      configuration =>
        (targetType ? targetType : 'Server').toLowerCase() ===
        configuration.target.toLowerCase()
    )
    .sort((a, b) => a.id - b.id)
    .map(({ id, key, values, format, dynamic, tags, description }, index) => (
      {
      index,
      id,
      key,
      values: values.map(({value}) => value).join(','),
      format,
      dynamic: dynamic.toString(),
      tags: tags.map(tag => tag.tag).join(' '),
      description,
    }));
}

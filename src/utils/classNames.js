export default function classNames(...args) {
  return args
    .reduce((acc, val) => {
      if (typeof val === 'string') {
        return acc.concat(val.split(' '));
      }
      if (val == null) return acc;
      return acc.concat(Object.values(val));
    }, [])
    .join(' ');
}

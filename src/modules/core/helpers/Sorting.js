export function descending(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

export function getSort(order, orderBy) {
  if (order === 'desc') {
    return (a, b) => descending(a, b, orderBy);
  }

  return (a, b) => -descending(a, b, orderBy);
}

export function sortObjectByKeys(object) {
  const sortedObject = {};

  Object.keys(object)
    .sort()
    .forEach((key) => {
      sortedObject[key] = object[key];
    });

  return sortedObject;
}

export function stableSort(array, compare) {
  const stabilizedArray = array.map((el, index) => [el, index]);

  stabilizedArray.sort((a, b) => {
    const order = compare(a[0], b[0]);

    if (order !== 0) {
      return order;
    }

    return a[1] - b[1];
  });

  return stabilizedArray.map((el) => el[0]);
}

export function sortObjectByKeysDeep(object, property) {
  const sortedObject = {};

  Object.keys(object)
    .sort()
    .forEach((key) => {
      sortedObject[key] = stableSort(object[key], getSort('asc', property));
    });

  return sortedObject;
}

export function sortObjectByProperty(object, property, direction) {
  const sortedObject = stableSort(Object.values(object), getSort(direction, property));

  return sortedObject;
}

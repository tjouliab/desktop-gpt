export function sortByDate<T, K extends keyof T>(
  list: T[],
  key: K,
  order: 'asc' | 'desc' = 'asc',
): T[] {
  if (order === 'asc') {
    return list.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  } else {
    return list.sort((a, b) => (a[key] < b[key] ? 1 : -1))
  }
}

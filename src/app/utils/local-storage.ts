export function setLocalStorage(
  key: string,
  _data: string | object | []
): void {
  const data = JSON.stringify(_data);
  localStorage.setItem(key, data);
}

export function getLocalStorage(key: string): [] | null {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export const setItem = (name: string, value: string) => {
  localStorage.setItem(name, value)
}
export const getItem = (name: string) => {
  return localStorage.getItem(name)
}

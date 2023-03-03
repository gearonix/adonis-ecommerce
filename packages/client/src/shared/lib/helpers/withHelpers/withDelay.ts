export const withDelay = (callback: () => void, ms = 300) => () => {
  setTimeout(callback, ms)
}

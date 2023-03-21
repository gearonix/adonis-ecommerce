export const useAdaptive = (px: number) => {
  return window?.innerWidth < px
}

export const getUserName = (userName: string) => {
  if (userName === 'User not found') {
    return 'Sign in | Register'
  }
  return userName
}

export const raiseGoogleImageQuality = (avatar: string | null): string | null => {
  return avatar ? avatar.replace('=s96-c', '=s1000') : null
}

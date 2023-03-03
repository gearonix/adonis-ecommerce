const FormErrors = {
  required: (word: string) => `${word} is required`,
  minLength: (word: string, chars = 4) => `${word} length should be at least ${chars} characters`,
  maxLength: (word: string, chars = 12) => `${word} cannot exceed more than ${chars} characters`,
  dontMatch: (word = 'Passwords') => `${word} do not match`,
  invalidEmail: () => 'Email is not valid',
  lessThan: (word: string, chars: number) => `${word} must not be less than ${chars}`,
  moreThan: (word: string, chars: number) => `${word} must not be more than ${chars}`,
  withCapital: (word: string) => `${word} must start with capital letters`,
  notWithNumbers: (word: string) => `${word} must not start with numbers`,
  oneImage: (word: string) => `${word} must contain at least one image`,
  moreImages: (word: string, max: number) => `${word} must not contain more than ${max} images`
}

export default FormErrors

import * as Yup from "yup";

export const formHelpers = {
    required: (word: string) => `${word} is required`,
    minLength: (word: string, chars = 4) => `${word} length should be at least ${chars} characters`,
    maxLength: (word: string, chars = 12) => `${word} cannot exceed more than ${chars} characters`,
    dontMatch: (word = 'Passwords') => `${word} do not match`,
    invalidEmail: () => 'Email is not valid',

}


export const createField = (fieldName: string, min = 4, max = 12) => {
    return Yup.string()
        .required(formHelpers.required(fieldName))
        .min(min, formHelpers.minLength(fieldName, min))
        .max(max, formHelpers.maxLength(fieldName, max))
        .trim();
}

export const createEmailField = () => createField('Email', 5, 28).email(formHelpers.invalidEmail())

export const createRepeatPassword = () => createField('Repeat Password', 8, 16)
    .oneOf([Yup.ref("password")], formHelpers.dontMatch())

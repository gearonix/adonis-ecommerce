import * as Yup from "yup";


const formSchema = Yup.object().shape({
    email: Yup.string()
        .required("Password is required")
        .min(4, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters"),
    password: Yup.string()
        .required("Password is required")
        .min(4, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters"),
    repeatPassword: Yup.string()
        .required("Confirm Password is required")
        .min(4, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters")
        .oneOf([Yup.ref("password")], "Passwords do not match")
});

const required = (word: string) => `${word} is required`
const minLength = (word: string, chars = 4) => `${word} length should be at least ${chars} characters`
const maxLength = (word: string, chars = 12) => `${word} cannot exceed more than ${chars} characters`
const dontMatch = (word = 'Passwords') => `${word} do not match`

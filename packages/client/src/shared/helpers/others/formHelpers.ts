import * as Yup from 'yup';
import {FieldValues, Path, UseFormRegisterReturn, UseFormReturn} from 'react-hook-form';

export const formErrors = {
  required: (word: string) => `${word} is required`,
  minLength: (word: string, chars = 4) => `${word} length should be at least ${chars} characters`,
  maxLength: (word: string, chars = 12) => `${word} cannot exceed more than ${chars} characters`,
  dontMatch: (word = 'Passwords') => `${word} do not match`,
  invalidEmail: () => 'Email is not valid',
};


export const createField = (fieldName: string, min = 4, max = 12) => {
  return Yup.string()
      .required(formErrors.required(fieldName))
      .min(min, formErrors.minLength(fieldName, min))
      .max(max, formErrors.maxLength(fieldName, max))
      .trim();
};


export const createEmailField = () => createField('Email', 5, 28).email(formErrors.invalidEmail());

export const createRepeatPassword = () => createField('Repeat Password', 8, 16)
    .oneOf([Yup.ref('password')], formErrors.dontMatch());

export const createOptionalField = (fieldName: string, min = 3, max = 12): Yup.StringSchema<string | null> => {
  const field = Yup.string().matches(/.{3,}/, {
    excludeEmptyString: true,
    message: formErrors.minLength(fieldName, 3),
  }).max(max, formErrors.maxLength(fieldName, 12)).nullable();
  return field as Yup.StringSchema<string | null>;
};
export const createMaxLengthField = (fieldName: string, max = 12): Yup.StringSchema<string | null> => {
  const field = Yup.string().max(max, formErrors.maxLength(fieldName, 12)).nullable();

  return field as Yup.StringSchema<string | null>;
};


interface CreateFieldValues<T extends FieldValues> {
    inputProps: UseFormRegisterReturn<Path<T>>,
    error: string
}

export const createFieldValues = <T extends FieldValues>({register, formState}:
                                                             UseFormReturn<T>) => (name: Path<T>): CreateFieldValues<T> => {
    return {
      inputProps: register(name),
      error: formState.errors[name]?.message as string,
    };
  };

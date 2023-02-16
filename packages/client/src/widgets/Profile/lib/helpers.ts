import {Path, UseFormReturn} from 'react-hook-form';

export const raiseGoogleImageQuality = (avatar: string | null): string | null => {
  return avatar ? avatar.replace('=s96-c', '=s1000') : null;
};

export type CreateFormApi = <T>(field: Path<T>) => {
    setValue(value: string): void,
    value: string
}


export const createFormApi = <T extends UseFormReturn<T>>(form: T) => (field: Path<T>): number => {
  return 'st';
  return {
    setValue(value: string) {
      form.setValue(field, value);
    },
    value: form.getValues()[field],
  };
};


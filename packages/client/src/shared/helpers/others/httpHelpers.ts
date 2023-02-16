import {AxiosResponse, HttpStatusCode} from 'axios';
import {UploadProperties} from "shared/types/globals";
import {ChangeEvent} from "react";

export const isResponseError = (response: AxiosResponse) => response.status !== HttpStatusCode.Ok &&
    response.status !== HttpStatusCode.Created;

export const onThunkError = (response: any) => (callback: () => void) => {
  if (response.meta.requestStatus === 'rejected') {
    callback();
  }
};

export const withFormData = (mode: UploadProperties) => (e : ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length === 0) return null

    const file = e.target.files?.[0] as File

    const formData = new FormData()
    formData.append(mode, file)

    return formData
}

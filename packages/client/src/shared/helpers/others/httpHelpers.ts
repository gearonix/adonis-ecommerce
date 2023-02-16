import {AxiosResponse, HttpStatusCode} from 'axios';

export const isResponseError = (response: AxiosResponse) => response.status !== HttpStatusCode.Ok &&
    response.status !== HttpStatusCode.Created;

export const onThunkError = (response: any) => (callback: () => void) => {
  if (response.meta.requestStatus === 'rejected') {
    callback();
  }
};

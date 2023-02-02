import {AxiosResponse, HttpStatusCode} from "axios";

export const isError = (response: AxiosResponse<any>) => response.status !== HttpStatusCode.Ok
    && response.status !== HttpStatusCode.Created

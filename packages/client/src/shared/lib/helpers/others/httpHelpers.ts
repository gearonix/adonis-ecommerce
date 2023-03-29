import { AxiosResponse, HttpStatusCode } from 'axios'
import appConfig from 'app/config/config'

export const isError = (response: AxiosResponse) => response.status !== HttpStatusCode.Ok &&
    response.status !== HttpStatusCode.Created

export const onThunkError = (response: any) => (callback: () => void) => {
  if (response.meta.requestStatus === 'rejected') {
    callback()
  }
}


export const publicAssets = (path: string | undefined) => {
  return `${appConfig.PUBLIC_FOLDER}/assets/${path}`
}



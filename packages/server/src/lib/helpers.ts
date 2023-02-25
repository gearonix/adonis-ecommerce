import * as uuid from 'uuid'

export const generateId = () => uuid.v4().slice(0, 8)

export const lastItemOf = <T>(array: T[]): T => {
  return array[array.length - 1]
}

export const getRequest = (requestContext : any) => {
  return requestContext.currentContext.req
}

export const getResponse = (requestContext : any) => {
  return requestContext.currentContext.res
}

export const isNumber = (str: string) => !isNaN(parseInt(str))

export const isExist = <T, N>(name: T, value: N): N | undefined => {
  return name ? value : undefined
}

import {ObjectOptional} from 'shared/types/common'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)

class Helpers {
  public nameToEmail(email: string) {
    return this.capitalize(email.split('@')[0])
  }

  public capitalize(str: string) {
    return str.toUpperCase()[0] + str.slice(1)
  }

  public attachStrings(...args: string[]) {
    return args.join(' ')
  }

  public isObjectEmpty(obj: any) {
    return Object.keys(obj).length === 0
  }

  public differenceBetweenObjects<T extends Object>(initialObject: T, changedObject: T) {
    const difference: ObjectOptional<T> = {}

    for (const key in initialObject) {
      if (initialObject[key] !== changedObject[key]) {
        difference[key] = changedObject[key]
      }
    }
    if (this.isObjectEmpty(difference)) {
      return null
    }

    return difference
  }
  public reformatMysqlDate(date: string) {
    return dayjs(date).format('LL')
  }
  public partial<T extends Object>(obj: T): Partial<T> {
    const newObj: Partial<T> = {}
    Object.entries(obj).map(([key, value]) => {
      if (value === null || value === undefined || value === '') {
        return
      }
      newObj[key as keyof T] = value
    })
    return newObj
  }
  public toQuery<T extends Object>(obj: T) {
    return Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&')
  }
  public toUndefined(str: string) {
    return str === '' ? undefined : str
  }
  public cropped(str: string, char = 30) {
    return str.length > 30 ? str.slice(0, char) + '...' : str
  }
  public isExist<T, N>(name: T, value: N): N | undefined {
    return name ? value : undefined
  }
  public byDefault<T, N>(name: T, defaultValue: N): N | T {
    return name ? name : defaultValue
  }
}


export default Helpers

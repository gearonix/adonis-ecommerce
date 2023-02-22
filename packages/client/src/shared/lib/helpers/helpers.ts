import {IHelpers} from './types'
import {ObjectOptional} from 'shared/types/common'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)

class Helpers implements IHelpers {
  public getNameFromEmail(email: string) {
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
  public onlyDefinedValues<T extends Object>(obj: T): Partial<T> {
    return JSON.parse(JSON.stringify(obj))
  }
  public objectToQuery<T extends Object>(obj: T) {
    return Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&')
  }
}

export default Helpers

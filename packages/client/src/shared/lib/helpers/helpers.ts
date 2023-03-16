import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { UserRoles } from 'app/config/globals'

dayjs.extend(LocalizedFormat)

class Helpers {
  public emailToName(email: string) {
    return this.capitalize(email.split('@')[0])
  }
  public toNormalRole(role: UserRoles) {
    return this.capitalize(role.toLowerCase())
  }

  public capitalize(str: string) {
    return str.toUpperCase()[0] + str.slice(1)
  }

  public attachStrings(...args: string[]) {
    return args.join(' ')
  }

  public isObjectEmpty<T extends Object>(obj: T) {
    return Object.keys(obj).length === 0
  }

  public differenceBetweenObjects<T>(initialObject: T, changedObject: T) {
    const difference: Partial<T> = {}

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
  public reformatMysqlDate(date: string, format = 'LL') {
    return dayjs(date).format(format)
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
    return str?.length > char ? str.slice(0, char) + '...' : str
  }
  public byDefault<T, N>(name: T, defaultValue: N): N | T {
    return name ? name : defaultValue
  }
  public sum(array: number[]): number {
    return array.reduce((prev, next) => prev + next, 0)
  }
  public emptyArray<T>(array: T[]) {
    return array.length === 0
  }
  public toNormalName(user: any) {
    if (user.firstName) {
      return user.firstName
    }
    return user.email || 'User not found'
  }
  public removeSpaces(str: string) {
    return str.split(' ').join('')
  }
  public strOrUndefined(condition: boolean, str : string) {
    return condition ? str : undefined
  }
  public nextItem<T>(array: T[], current: T): T {
    return array[array.indexOf(current) + 1] || array[0]
  }
}


export default Helpers

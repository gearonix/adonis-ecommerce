import {LocalStorage} from 'shared/config/themes'
import {Nullable} from 'shared/types/common'


export class ReduxLocalStorage<T> {
  key: LocalStorage
  constructor(key: LocalStorage) {
    this.key = key
  }
  public get(): Nullable<T> {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem(this.key) as string)
    }
    return null
  }
  public save(value: T) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.key, JSON.stringify(value))
    }
  }
}

export class LocalStorageHelper {
  public get() {
    if (typeof localStorage !== 'undefined') {
      return localStorage
    }
    return null
  }
  public clear() {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear()
    }
  }
}

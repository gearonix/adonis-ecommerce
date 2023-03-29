import { Nullable } from 'shared/types/common'
import { LocalStorage } from 'shared/config/consts/others'


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

export class NextLocalStorage {
  public getStorage() {
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
  public get(key: LocalStorage) {
    if (typeof localStorage!=='undefined') {
      return localStorage.getItem(key)
    }
  }
  public set(key: LocalStorage, value: string) {
    if (typeof localStorage !== 'undefined' && value) {
      localStorage.setItem(key, value)
    }
  }
}

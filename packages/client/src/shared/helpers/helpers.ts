import {IHelpers} from "./types";
import {ObjectOptional} from "shared/types/helpers";

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
        let difference: ObjectOptional<T> = {}

        for (let key in initialObject) {
            if (initialObject[key] !== changedObject[key]) {
                difference[key] = changedObject[key]
            }
        }
        if (this.isObjectEmpty(difference)) {
            return null
        }

        return difference
    }
}

export default Helpers

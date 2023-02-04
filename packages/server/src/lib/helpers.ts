import * as uuid from 'uuid'

export const generateId = () => uuid.v4().slice(0, 8)

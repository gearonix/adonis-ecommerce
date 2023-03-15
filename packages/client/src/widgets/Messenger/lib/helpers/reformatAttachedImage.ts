import { Nullable } from 'shared/types/common'

export const reformatAttachedImage = (file: Nullable<File>) => {
  return file ? {
    originalname: file.name,
    buffer: file
  } : null
}

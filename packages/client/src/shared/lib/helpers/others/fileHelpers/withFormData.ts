import {UploadProperties} from 'app/config/globals'

export const withFormData = (mode: UploadProperties) => (...files: File[]) => {
  const formData = new FormData()
  for (const file of files) {
    formData.append(mode, file)
  }


  return formData
}

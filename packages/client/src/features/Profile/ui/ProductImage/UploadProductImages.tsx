import { FC, memo, useCallback, useState } from 'react'
import s from './style.module.scss'
import { ImageCarousel } from 'features/ProductPage'
import { AiOutlineUpload, BsTrash } from 'shared/ui/icons'
import { UploadButton } from 'shared/ui/kit'
import { FieldValues } from 'shared/lib/helpers'
import AddProductImage from 'entities/Profile/ui/AddProductImage/AddProductImage'
import { FormHelperText } from '@mui/material'
import { Display } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'

export interface ProductImagesProps{
  values: FieldValues
}

const UploadProductImages = memo<ProductImagesProps>(({ values }) => {
  const [files, setFiles] = useState<string[]>([])
  const currentValues = values.getValue()
  const { t } = useTranslation()

  const onUpload = useCallback((file: File) => {
    const fileUrl = URL?.createObjectURL(file)

    values.setValue([...currentValues, file])
    setFiles([...files, fileUrl])
  }, [values])

  const removeFiles = () => {
    values.setValue([])
    setFiles([])
  }


  return <div className={s.flex}>
    <AddProductImage ImageCarousel={ImageCarousel} files={files}/>
    <div className={s.add_image_block}>
      <div className={s.buttons}>
        {/* @ts-ignore*/}
        <UploadButton className={'primary_button'}
          handleChange={onUpload} disabled={files.length === 5}>
          <AiOutlineUpload/>{t('Upload files')}</UploadButton>
        <button className={'outlined_button'} onClick={removeFiles} >
          <BsTrash/> {t('Remove all')}</button>
      </div>
      <Display when={values.error}>
        <FormHelperText error id="accountId-error" sx={{ fontSize: 14, marginTop: 0,
          marginLeft: '26px' }}>
          {values.error}
        </FormHelperText>
      </Display>
    </div>
  </div>
})

export default UploadProductImages

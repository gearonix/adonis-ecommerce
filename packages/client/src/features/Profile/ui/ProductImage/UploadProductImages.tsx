import { FC, useState } from 'react'
import s from './style.module.scss'
import { ProductImages } from 'entities/ProductPage'
import { ImageCarousel } from 'features/ProductPage'
import { AiOutlineUpload, BsTrash } from 'shared/ui/icons'
import { UploadButton } from 'shared/ui/kit'
import { FieldValues } from 'shared/lib/helpers'
import AddProductImage from '../../../../entities/Profile/ui/AddProductImage/AddProductImage'

export interface ProductImagesProps{
  values: FieldValues
}

const UploadProductImages: FC<ProductImagesProps> = ({ values }) => {
  const [files, setFiles] = useState<string[]>([])
  const currentValues = values.getValue()

  const onUpload = (file: File) => {
    const fileUrl = URL?.createObjectURL(file)

    values.setValue([...currentValues, file])
    setFiles([...files, fileUrl])
  }

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
          handleChange={onUpload} disabled={files.length === 4}>
          <AiOutlineUpload/> Upload Files</UploadButton>
        <button className={'outlined_button'} onClick={removeFiles} >
          <BsTrash/> Remove all</button>
      </div>
      <span>{values.error}</span>
    </div>
  </div>
}

export default UploadProductImages

import {FC, useState} from 'react'
import s from './style.module.scss'
import {ProductImagesShowcase} from 'entities/ProductPage/ProductImage'
import {ImageCarousel} from 'features/ProductPage/ImageCarousel'
import {AiOutlineUpload, BsTrash} from 'shared/ui/icons'
import {UploadButton} from 'shared/ui/kit'
import {FieldValues} from 'shared/lib/helpers/others'

export interface ProductImagesProps{
  values: FieldValues
}

const UploadProductImages: FC<ProductImagesProps> = ({values}) => {
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
    {files.length && <ProductImagesShowcase ImageCarousel={ImageCarousel} files={files}/>}
    <div className={s.add_image_block}>
      <p className={s.text}>
                Lorem ipsum dolor sit amet, consectetur adipis
                Lorem ipsum dolor sit amet
      </p>
      <div className={s.flex}>
        {/* @ts-ignore*/}
        <UploadButton className={'primary_button'}
          handleChange={onUpload} disabled={files.length === 4}>
          <AiOutlineUpload/> Upload Files</UploadButton>
        <button className={'outlined_button'} onClick={removeFiles}><BsTrash/> Remove all</button>
      </div>
      <h2 className={s.title}>Product Name</h2>
      <h2 className={s.title}>Price: <b>$123</b></h2>
      <span>{values.error}</span>
    </div>
  </div>
}

export default UploadProductImages

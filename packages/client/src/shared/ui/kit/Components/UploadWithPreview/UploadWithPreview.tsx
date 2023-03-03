import { FC, useState } from 'react'
import { AiOutlineUpload } from 'react-icons/ai'
import { NextImage, UploadButton } from 'shared/ui/kit'
import { FieldValues } from 'shared/lib/helpers'
import { DefaultAssets } from 'shared/config/assets'

interface UploadWithPreviewProps{
  values: FieldValues
}


export const UploadWithPreview : FC<UploadWithPreviewProps> = ({ values }) => {
  const [fileUrl, setFileUrl] = useState<string>()
  const onUpload = (file: File) => {
    setFileUrl(URL?.createObjectURL(file))
    values.setValue(file)
  }
  return <><UploadButton className={'primary_button'}
    handleChange={onUpload} disabled={!!fileUrl}>
    <AiOutlineUpload/> Upload File</UploadButton>
  <div style={{ position: 'relative', width: '200px', height: '100px' }}>
    {fileUrl && <NextImage src={fileUrl} def={DefaultAssets.PRODUCT}/>}
  </div>
  </>
}



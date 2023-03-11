import { ChangeEvent, FC, useState } from 'react'
import { AiOutlineUpload } from 'react-icons/ai'
import { NextImage, UploadButton } from 'shared/ui/kit'
import { FieldValues } from 'shared/lib/helpers'
import { Assets, DefaultAssets } from 'shared/config/consts/assets'
import s from './style.module.scss'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'

interface UploadWithPreviewProps{
  values: FieldValues
}


export const UploadWithPreview : FC<UploadWithPreviewProps> = ({ values }) => {
  const [fileUrl, setFileUrl] = useState<string>('')
  const { t } = useTranslation()
  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length === 0) return
    const file = e?.target?.files?.[0]

    setFileUrl(URL?.createObjectURL(file as File))
    values.setValue(file)
  }
  return <>
    <div className={s.images}>
      <div className={s.image_wrapper}>
        <NextImage src={fileUrl} def={Assets.APP_ERROR}/>
        <input type={'file'} onChange={onUpload} className={s.hiddenUpload}/>
      </div>
      <p className={cn({ [s.error]: values.error })}>{t('Click_photo')}</p>
    </div>
  </>
}



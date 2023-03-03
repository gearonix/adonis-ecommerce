import { FC } from 'react'
import { HeadField } from 'shared/ui/material'
import { UploadWithPreview } from 'shared/ui/kit'
import { AddPostForm } from 'widgets/Posts/types'
import { CreateFieldValues } from 'shared/lib/helpers'

interface AddPostProps{
  reg: CreateFieldValues<AddPostForm>,
  submit: () => void,
  close: () => void
}


const AddPostTemplate : FC<AddPostProps> = ({ reg, submit, close }) => {
  return <div>
    <h1>add post</h1>
    <HeadField title={'message'} values={reg('message')} />
    <UploadWithPreview values={reg('image')}/>
    <button onClick={submit}>submit</button>
    <button onClick={close}>close</button>
  </div>
}


export default AddPostTemplate

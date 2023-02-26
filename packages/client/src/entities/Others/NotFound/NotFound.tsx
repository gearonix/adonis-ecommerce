import s from './style.module.scss'
import {NextImage} from 'shared/ui/kit'
import cn from 'classnames'
import Link from 'next/link'
import React from 'react'
import {Assets} from 'shared/config/assets'

const NotFoundComponent = () => {
  return <div className={s.not_found}>
    <h1 className={s.title}>Ooops....</h1>
    <h2 className={s.subtitle}>Page not found</h2>
    <Link href={'/'}>
      <button className={cn(s.go_back, 'primary_button')}>Plz go back</button>
    </Link>
    <div className={s.image_wrapper}>
      <NextImage src={Assets.NOT_FOUND}/>
    </div>
  </div>
}

export default NotFoundComponent

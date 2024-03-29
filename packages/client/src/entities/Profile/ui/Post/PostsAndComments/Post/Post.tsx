import Link from 'next/link'
import { FC, memo } from 'react'
import { DefaultAssets } from 'shared/config/consts/assets'
import { routes } from 'shared/config/consts/routes'
import { Post as PostI } from 'widgets/Profile'
import { BsDot } from 'shared/ui/icons'
import { NextImage } from 'shared/ui/kit'
import s from '../style.module.scss'
import { Helpers } from 'shared/lib/helpers'
import { useBooleanState } from 'shared/lib/hooks'
import { ImageModal } from 'shared/ui/material'

interface PostProps{
  post: PostI
}

const Post: FC<PostProps> = memo(({ post }) => {
  const { user } = post
  const helpers = new Helpers()
  const modal = useBooleanState()
  return <div className={s.post}>
    <Link className={s.user_image} href={`${routes.USERS}/${user.userId}`}>
      <NextImage src={user.avatar} def={DefaultAssets.AVATAR}/>
    </Link>
    <div className={s.user_info}>
      <h2 className={s.user_name}>
        <Link className={s.user_image} href={`${routes.USERS}/${user.userId}`}>
          <span className={'hover_link'}>{helpers.toNormalName(user)}</span>
        </Link>
        <span className={s.email}><BsDot/>{user.email.split('@')[0]}</span>
        <span className={s.date}><BsDot/>{helpers.reformatMysqlDate(post.date)}</span></h2>
      <p className={s.post_text}>{helpers.capitalize(post.message)}
      </p>
      <ImageModal isOpen={modal.isOpen} close={modal.close} image={post.image}/>
      <div className={s.attached_image} onClick={modal.open}>
        <NextImage src={post.image} def={DefaultAssets.POST}/>
      </div>
    </div>
  </div>
})

export default Post

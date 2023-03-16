import Link from 'next/link'
import { FC } from 'react'
import { DefaultAssets } from 'shared/config/consts/assets'
import { routes } from 'shared/config/consts/routes'
import { Post } from 'widgets/Profile'
import { BsDot, BsThreeDotsVertical } from 'shared/ui/icons'
import { NextImage } from 'shared/ui/kit'
import s from '../style.module.scss'
import { Helpers } from 'shared/lib/helpers'

interface PostProps{
  post: Post
}

const Post: FC<PostProps> = ({ post }) => {
  const { user } = post
  const helpers = new Helpers()
  return <div className={s.post}>
    <Link className={s.user_image} href={`${routes.USERS}/${user.userId}`}>
      <NextImage src={user.avatar} def={DefaultAssets.AVATAR}/>
    </Link>
    <div className={s.user_info}>
      <h2 className={s.user_name}>
        <Link className={s.user_image} href={`${routes.USERS}/${user.userId}`}>
          <span className={'hover_link'}>{helpers.toNormalName(user)}</span>
        </Link>
        <span><BsDot/>{helpers.reformatMysqlDate(post.date)}</span></h2>
      <p className={s.post_text}>{helpers.capitalize(post.message)}
      </p>
      <div className={s.attached_image} >
        <NextImage src={post.image} def={DefaultAssets.POST}/>
      </div>
    </div>
  </div>
}

export default Post

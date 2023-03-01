import {FC} from 'react'
import {PostProps} from 'entities/Profile/Post/types'
import {Helpers} from 'shared/lib/helpers/others'
import {NextImage} from 'shared/ui/kit'
import {DefaultAssets} from 'shared/config/assets'
import {BsDot, BsThreeDotsVertical} from 'shared/ui/icons'
import s from './style.module.scss'
import Link from 'next/link'
import {routes} from 'shared/config/routes'

export const CommentWrapper: FC<PostProps> = ({comment}) => {
  const helpers = new Helpers()
  const {user} = comment
  return <>
    <div className={s.post}>
      <Link className={s.user_image} href={`${routes.PROFILE}/${user.userId}`}>
        <NextImage src={user.avatar} def={DefaultAssets.AVATAR}/>
      </Link>
      <div className={s.user_info}>
        <h2 className={s.user_name}>
          <Link className={s.user_image} href={`${routes.PROFILE}/${user.userId}`}>
            <span className={'hover_link'}>{helpers.toNormalName(user)}</span>
          </Link>
          <span><BsDot/>{helpers.reformatMysqlDate(comment.date)}</span></h2>
        <p className={s.post_text}>{helpers.capitalize(comment.message)}
        </p>
        <div className={s.options}>
          <BsThreeDotsVertical/>
        </div>
      </div>
    </div>
  </>
}

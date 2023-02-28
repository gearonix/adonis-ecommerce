import {FC, useState} from 'react'
import {PostProps} from 'entities/Profile/Post/types'
import {Helpers} from 'shared/lib/helpers/others'
import {NextImage} from 'shared/ui/kit'
import {DefaultAssets} from 'shared/config/assets'
import {BsDot, BsThreeDotsVertical, FiHeart, MdMessage} from 'shared/ui/icons'
import {ImageModal} from 'shared/ui/mui'
import s from './style.module.scss'

export const Post: FC<PostProps> = ({comment}) => {
  const [isModalOpened, openModal] = useState<boolean>(false)
  const helpers = new Helpers()
  const {user} = comment
  return <>
    <div className={s.post}>
      <div className={s.user_image}>
        <NextImage src={user.avatar} def={DefaultAssets.AVATAR}/>
      </div>
      <div className={s.user_info}>
        <h2 className={s.user_name}>{helpers.toNormalName(user)}
          <span><BsDot/>{helpers.reformatMysqlDate(comment.date)}</span></h2>
        <p className={s.post_text}>{helpers.capitalize(comment.message)}
        </p>
        <ImageModal isOpen={isModalOpened} close={openModal}
          image={'/assets/dev/electronic_prewiew.svg'} def={DefaultAssets.PRODUCT}/>
        <div className={s.attached_image} onClick={() => openModal(true)}>
          <NextImage src={'/assets/dev/electronic_prewiew.svg'} def={DefaultAssets.PRODUCT}/>
        </div>
        <div className={s.post_buttons}>
          <button><MdMessage/> 10</button>
          <button><FiHeart/> {comment.likes}</button>
        </div>
        <div className={s.options}>
          <BsThreeDotsVertical/>
        </div>
      </div>
    </div>
  </>
}

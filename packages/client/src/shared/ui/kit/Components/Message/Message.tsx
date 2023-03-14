import { FC, useState } from 'react'
import s from './style.module.scss'
import cn from 'classnames'
import { ImageModal } from 'shared/ui/material'
import { NextImage } from 'shared/ui/kit'
import { BsCheck2 } from 'shared/ui/icons'
import { MessageProps } from '../../types'
import useMeasure from 'react-use-measure'
import { WithSpring } from 'shared/lib/components'


export const Message: FC<MessageProps> = ({ isMine = false, image, message, time }) => {
  const [isOpened, openModal] = useState<boolean>(false)
  const [bind, { height }] = useMeasure()
  return <WithSpring className={cn(isMine ? s.my_message : s.opponent_message)}
    type={'opacityHeight'} param={height}>
    {image && <ImageModal isOpen={isOpened} close={openModal} image={image} />}
    <div className={s.wrapper} ref={bind}>
      {image && <WithSpring className={s.image_wrapper} onClick={() => openModal(true)}>
        <NextImage src={image}/>
      </WithSpring>
      }
      <div className={s.title_wrapper}>
        <h4 className={s.title}>{message}</h4>
      </div>
      <div className={s.time_block}>
        <span>{time}</span>
        <BsCheck2/>
      </div>
    </div>
  </WithSpring>
}

export default Message

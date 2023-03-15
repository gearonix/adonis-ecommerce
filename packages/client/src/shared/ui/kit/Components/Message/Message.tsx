import { FC } from 'react'
import s from './style.module.scss'
import cn from 'classnames'
import { NextImage } from 'shared/ui/kit'
import { BsCheck2, BsCheck2All } from 'shared/ui/icons'
import { MessageProps } from '../../types'
import useMeasure from 'react-use-measure'
import { Display, WithSpring } from 'shared/lib/components'
import { Helpers } from 'shared/lib/helpers'
import { DefaultAssets } from 'shared/config/consts/assets'


export const Message: FC<MessageProps> = ({ isMine = false, message }) => {
  const helpers = new Helpers()
  const [bind, { height }] = useMeasure()
  return <WithSpring className={cn(isMine ? s.my_message : s.opponent_message)}
    type={'opacityHeight'} param={height}>
    <div className={s.wrapper} ref={bind}>
      {message.image &&
          <WithSpring className={s.image_wrapper}>
            <NextImage src={message.image} def={DefaultAssets.MESSAGE}/>
          </WithSpring>
      }
      <div className={s.title_wrapper}>
        <h4 className={s.title}>{message.messageText}</h4>
      </div>
      <div className={s.time_block}>
        <span>{helpers.reformatMysqlDate(message.creationDate, 'HH:mm')}</span>
        <Display when={isMine}>
          {message.isRead ? <BsCheck2All color={'#0D6EFD'}/> : <BsCheck2/>}
        </Display>
      </div>
    </div>
  </WithSpring>
}

export default Message

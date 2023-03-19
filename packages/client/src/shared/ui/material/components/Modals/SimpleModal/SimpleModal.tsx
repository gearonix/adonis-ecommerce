import { Backdrop, Fade, Modal } from '@mui/material'
import { CFC } from 'shared/types/components'
import s from './style.module.scss'
import { useTheme } from 'shared/lib/hooks'
import cn from 'classnames'
import { Inter } from 'next/font/google'
import { RxCross1 } from 'shared/ui/icons'
import { WithSpring } from 'shared/lib/components'

interface SimpleModalProps{
    isOpened: boolean,
    close: () => void,
    title: string
}


export const SimpleModal: CFC<SimpleModalProps> = ({ isOpened, close, children, title }) => {
  const { theme } = useTheme()
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpened}
        onClose={close}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <WithSpring>
          <Fade in={isOpened}>
            <div className={cn(s.wrapper,
                s[theme || 'light'])}>
              <div className={s.header}>
                <h2>{title}</h2>
                <RxCross1 onClick={close} className={s.cross}/>
              </div>
              <div className={s.content}>
                {children}
              </div>
            </div>

          </Fade>  </WithSpring>
      </Modal>
    </div>
  )
}

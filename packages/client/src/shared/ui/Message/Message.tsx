import {FC, useState} from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import {ImageModal} from 'mui';
import {NextImage} from 'shared/ui';
import {BsCheck2} from 'icons';
import {MessageProps} from '../types';
import {WithSpring} from 'shared/lib/animations';
import useMeasure from 'react-use-measure';


export const Message: FC<MessageProps> = ({isMine = false, image, message}) => {
    const [isOpened, openModal] = useState<boolean>(false);
    const [bind, {height}] = useMeasure();
    return <WithSpring className={cn(isMine ? s.my_message : s.opponent_message)}
                       type={'opacityHeight'} param={height}>
        {image && <ImageModal isOpen={isOpened} handleOpen={openModal} image={image}/>}
        <div className={s.wrapper} ref={bind}>
            {image && <WithSpring className={s.image_wrapper} onClick={() => openModal(true)}>
                <NextImage src={image}/>
            </WithSpring>
            }
            <div className={s.title_wrapper}>
                <h4 className={s.title}>{message}</h4>
            </div>
            <div className={s.time_block}>
                <span>19:48</span>
                <BsCheck2/>
            </div>
        </div>
    </WithSpring>;
};

export default Message;

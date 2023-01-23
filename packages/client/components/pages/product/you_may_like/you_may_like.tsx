import s from './you_may_like.module.scss'
import {NextImage} from "components/UIkit/components";


const YouMayLike = () => {
    return <article className={s.you_may_like}>
        <h4 className={s.heading}>You may like</h4>
        {[1, 2, 3, 4, 5].map(i => {
            return <div className={s.item} key={i}>
                <div className={s.image_wrapper}>
                    <NextImage src={'/mock_item.svg'}/>
                </div>
                <div className={s.info_block}>
                    <h4>Apple Watch Series Space Gray</h4>
                    <span>$7.00 - $99.50</span>
                </div>
            </div>
        })}

    </article>
}

export default YouMayLike

import s from './recommended.module.scss';
import cn from 'classnames';
import Image from 'next/image'

const Recommended = () => {
    return <div className={s.recommended}>
        <div className={s.image_block}>
            <div className={s.title}>Home and outdoor</div>
            <button className={cn('outlined_button', s.source_now)}
            >Source now
            </button>
        </div>
        <div className={s.recommended_items}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(item => {
                return <div className={s.item} key={item}>
                    <h3 className={s.item_title}>Soft chairs</h3>
                    <span className={s.item_description}>From USD 19</span>
                    <div className={s.item_image}>
                        <Image src={'/mock_item.svg'} alt={'Check it!'}
                               width={82} height={82}/>
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default Recommended

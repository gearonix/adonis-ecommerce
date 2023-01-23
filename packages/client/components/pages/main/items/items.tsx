import s from './items.module.scss'
import Image from "next/image";


const RecommendedItems = () => {
    return <article className={s.recommended_items}>
        <h2 className='dark_title'>Recommended items</h2>
        <div className={s.items_block}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => {
                return <div className={s.item} key={i}>
                    <Image src={'/mock_item.svg'} alt={'Check it!'}
                           width={200} height={200}/>
                    <h3 className={s.price}>$10.30</h3>
                    <span className={s.item_description}>
                T-shirts with multiple colors, for men
                </span>
                </div>
            })}
        </div>
    </article>
}

export default RecommendedItems

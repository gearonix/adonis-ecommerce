import s from './extra_services.module.scss'
import {AiOutlineSearch} from "icons";


const ExtraServices = () => {
    return <article className={s.extra_services}>
        <h2 className="dark_title">Our extra services</h2>
        <div className={s.block}>
            {[1, 2, 3, 4].map(i => {
                return <div className={s.item} key={i}>
                    <div className={s.item_image}>
                        <div className={s.item_button}>
                            <AiOutlineSearch/>
                        </div>
                    </div>
                    <h3 className={s.item_title}>Source from Industry Hubs</h3>
                </div>
            })}

        </div>
    </article>
}

export default ExtraServices

import { FC, ReactElement } from 'react'
import s from './style.module.scss'

export interface FindProductBannerP {
    Form: ReactElement
}


const FindProductSkeleton: FC<FindProductBannerP> = ({ Form }) => {
  return <div className={s.search_form}>
    <h1 className={s.title}>You can start looking for
        what you need right now!</h1>
    <p className={s.description}>Our store has everything:
        clothes, shoes,
        children&apos;s products and much more.</p>
    {Form}
  </div>
}

export default FindProductSkeleton

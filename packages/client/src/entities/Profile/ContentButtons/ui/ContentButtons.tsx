import {FC, ReactElement} from 'react'
import s from './style.module.scss'
import {AiOutlineFileAdd, AiOutlineUnorderedList, FiHeart} from 'shared/ui/icons'
import {Nullable} from 'shared/types/common'

export interface ContentButtonsProps {
  AddProduct: Nullable<ReactElement>
}


const ContentButtons: FC<ContentButtonsProps> = ({AddProduct}) => {
  return <div className={s.content_buttons}>
    <button className={s.selected}><AiOutlineFileAdd/> Posts</button>
    <button><AiOutlineUnorderedList/> Products</button>
    <button><FiHeart/> Saved</button>
    <div className={s.add_product}>
      {AddProduct}
    </div>
  </div>
}

export default ContentButtons

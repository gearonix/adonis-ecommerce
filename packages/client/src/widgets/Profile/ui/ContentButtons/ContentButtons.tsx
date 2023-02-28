import {FC} from 'react'
import {ContentButtonsTemplate} from 'features/Profile/ContentButtons'
import {OpenAddProduct} from 'features/Profile/OpenAddProduct'
import {useSelector} from 'shared/types/redux'
import userSelectors from 'shared/selectors/userSelectors'
import {UserRoles} from 'app/config/globals'

interface ContentButtonsProps{
  openModal: () => void,
}


const ContentButtons: FC<ContentButtonsProps> = ({openModal}) => {
  const role = useSelector(userSelectors.userRole)

  return <ContentButtonsTemplate
    AddProduct={role === UserRoles.SALESMAN && <OpenAddProduct open={openModal}/>}
  />
}

export default ContentButtons

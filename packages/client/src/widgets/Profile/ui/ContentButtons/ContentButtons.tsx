import {FC} from 'react'
import {ContentButtonsTemplate} from 'entities/Profile/ContentButtons'
import {OpenAddProduct} from 'features/Profile/OpenAddProduct'
import {useSelector} from 'shared/types/redux'
import userSelectors from 'shared/selectors/userSelectors'
import {UserRoles} from 'app/config/globals'

const ContentButtons: FC<{ openModal: () => void }> = ({openModal}) => {
  const role = useSelector(userSelectors.userRole)

  return <ContentButtonsTemplate
    AddProduct={role === UserRoles.SALESMAN ? <OpenAddProduct open={openModal}/> : null}/>
}

export default ContentButtons

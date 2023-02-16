import {FC} from 'react';
import {ContentButtonsTemplate} from 'entities/Profile/ContentButtons';
import {OpenAddProduct} from 'features/Profile/OpenAddProduct';

const ContentButtons: FC<{ openModal: () => void }> = ({openModal}) => {
  return <ContentButtonsTemplate AddProduct={<OpenAddProduct open={openModal}/>}/>;
};

export default ContentButtons;

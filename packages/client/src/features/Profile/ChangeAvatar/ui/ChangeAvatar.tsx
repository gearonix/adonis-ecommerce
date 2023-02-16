import {FC} from 'react';
import {UploadButton} from "shared/ui";
import {changeAvatar} from "../thunks/changeAvatar";
import {useDispatch} from 'shared/types/redux';
import {UploadProperties} from "shared/types/globals";

const ChangeAvatar: FC = () => {
  const dispatch = useDispatch()

  const uploadAvatar = (formData: FormData) => {
    dispatch(changeAvatar(formData))
  }

  return <UploadButton className="outlined_button"
                 handleChange={uploadAvatar}
                 mode={UploadProperties.USER_AVATAR}>Change avatar </UploadButton>;
};

export default ChangeAvatar;

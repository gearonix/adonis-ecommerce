import {useSelector} from 'shared/types/redux';
import Selectors from 'shared/model/selectors';
import {ObjectNullable} from 'shared/types/helpers';
import Helpers from 'shared/helpers/helpers';
import {UserSlice} from 'shared/types/slices';
import {raiseGoogleImageQuality} from 'widgets/Profile/lib/helpers';

export interface FormattedUser {
    user_name: string,
    description: string,
    user_image: string,
    background: string
}


export const useReformatUser = (): ObjectNullable<FormattedUser> => {
  const user = useSelector(Selectors.user);
  const {firstName, lastName, description, email, avatar, user_id,
    background} = user as UserSlice;

  if (!user_id) {
    return {
      user_name: null,
      description: null,
      user_image: null,
      background: null
    };
  }

  const helpers = new Helpers();

  const user_email = helpers.getNameFromEmail(email);

  const user_name = firstName ? helpers.attachStrings(firstName, lastName) : user_email;

  const user_image = raiseGoogleImageQuality(avatar);

  return {
    user_name,
    description,
    user_image,
    background
  };
};

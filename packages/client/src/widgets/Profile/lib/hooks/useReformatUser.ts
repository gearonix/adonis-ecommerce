import {useSelector} from 'shared/types/redux'
import Selectors from 'shared/model/selectors'
import {ObjectNullable} from 'shared/types/common'
import Helpers from 'shared/lib/helpers/helpers'
import {UserSlice} from 'shared/types/slices'
import {raiseGoogleImageQuality} from 'widgets/Profile/lib/helpers'

export interface FormattedUser {
    userName: string,
    description: string,
    userImage: string,
    background: string
}


export const useReformatUser = (): ObjectNullable<FormattedUser> | null => {
  const user = useSelector(Selectors.user)

  const {firstName, lastName, description, email, avatar,
    background, userId} = user as UserSlice

  if (!userId) return null

  const helpers = new Helpers()

  const userEmail = helpers.getNameFromEmail(email)

  const userName = firstName ? helpers.attachStrings(firstName, lastName) : userEmail

  const userImage = raiseGoogleImageQuality(avatar)

  return {
    userName,
    description,
    userImage,
    background,
  }
}

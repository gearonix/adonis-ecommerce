import {useSelector} from "shared/types/redux";
import Selectors from "shared/model/selectors";
import {EditProfileForm} from "widgets/Profile/types";
import {UserSlice} from "shared/types/slices";


export const useCreateEditProfileValues = (): { defaultValues: EditProfileForm } => {
    const user = useSelector(Selectors.user)

    const {firstName, lastName, description, country, city} = user as UserSlice

    return {
        defaultValues: {
            firstName: firstName,
            lastName: lastName,
            description,
            country,
            city
        }
    }

}

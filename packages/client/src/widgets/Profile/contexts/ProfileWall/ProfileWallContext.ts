import { createContext } from 'react'
import { WallPages } from 'widgets/Profile/types'


export interface ProfileWallContextProps {
    page?: WallPages,
    setPage?: (value: WallPages) => void;
}


const ProfileWallContext = createContext<ProfileWallContextProps>({})


export default ProfileWallContext

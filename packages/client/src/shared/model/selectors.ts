import {AppState} from "shared/config/types/redux";


const Selectors = {
    userId: (state: AppState) => state.user.user_id
}


export default Selectors

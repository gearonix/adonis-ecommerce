import {AppState} from "shared/types/redux";


const Selectors = {
    userId: (state: AppState) => state.user.user_id
}


export default Selectors

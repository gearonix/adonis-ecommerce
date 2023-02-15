import {AppState} from 'shared/types/redux';


const Selectors = {
    userId: (state: AppState) => state.user.user_id,
    user: (state: AppState) => state.user
}


export default Selectors;

import {userSlice} from 'widgets/Profile';


export const createReducers = () => {
  return {
    user: userSlice,
  };
};

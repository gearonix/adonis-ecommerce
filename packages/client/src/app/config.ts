import {Paths} from 'shared/types/globals';

const appConfig = {
    SERVER_URL: process.env.SERVER_URL,
    privatePaths: {
        unauthorized: [Paths.PROFILE, Paths.MESSENGER],
        authorized: [Paths.LOGIN, Paths.SIGNUP_CUSTOMER, Paths.SIGNUP_SALESMAN, Paths.SIGNUP],
    },
};


export default appConfig;

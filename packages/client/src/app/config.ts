import {Paths} from "shared/types/globals";

const appConfig = {
    SERVER_URL: 'http://localhost:6868/api',
    privatePaths: {
        unauthorized: [Paths.PROFILE, Paths.MESSENGER],
        authorized: [Paths.LOGIN, Paths.SIGNUP_CUSTOMER, Paths.SIGNUP_SALESMAN, Paths.SIGNUP]
    }
}


export default appConfig

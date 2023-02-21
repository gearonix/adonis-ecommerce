export enum ServerExceptions {
  USER_NOT_EXIST = 'This user does not exist',
  INCORRECT_PASSWORD = 'Incorrect email or password',
  USER_ALREADY_EXISTS = 'User with this email already exists',
  NOT_AUTHORIZED = 'User not authorized',
  NO_COOKIE = 'No cookie',
  INCORRECT_TOKEN = 'Incorrect token',
  NO_TOKEN = 'Headers does not contain a token',
  INCORRECT_USER_DATA = 'You have entered incorrect user data',
  FILE_UPLOAD_ERROR = 'An error occurred while writing the file',
  FILE_REMOVAL_ERROR = 'An error occurred while removing the file',
  FORBIDDEN = 'Forbidden for you',
  INCORRECT_DATA = 'Your data is incorrect'
}

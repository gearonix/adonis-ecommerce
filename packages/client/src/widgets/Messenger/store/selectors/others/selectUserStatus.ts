import { RequiredState } from 'app/store/types'

export const selectUserStatus = ({ messenger }: RequiredState) => {
  return !messenger.isTyping ? messenger.status : 'typing...'
}

import { UserRoles } from 'app/config/globals'

export const createDefaultValues = () => ({
  selectValues: {
    role: Object.values(UserRoles)
  }
})

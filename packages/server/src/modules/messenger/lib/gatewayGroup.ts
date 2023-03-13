import { StatusGroups, ChatGroups } from '@modules/messenger/gateways'

type AllGroups = StatusGroups | ChatGroups

export const gatewayGroup = (group: AllGroups, id: number) => {
  return `${group}/${id}`
}

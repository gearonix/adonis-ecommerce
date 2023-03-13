import { StatusGroups, ChatGroups } from '@modules/messenger/gateways';
type AllGroups = StatusGroups | ChatGroups;
export declare const gatewayGroup: (group: AllGroups, id: number) => string;
export {};

export declare const generateId: () => any;
export declare const lastItemOf: <T>(array: T[]) => T;
export declare const getRequest: (requestContext: any) => any;
export declare const getResponse: (requestContext: any) => any;
export declare const isNumber: (str: string) => boolean;
export declare const ifExist: <T, N>(name: T, value: N) => N;
export declare const withLimit: (page: string | undefined, take?: 9) => {
    take: 9;
    skip: number;
};
export declare const sleep: () => Promise<unknown>;
export declare const addIfNotExists: (array: any, element: any) => any;
export declare const removeElement: (array: any, element: any) => any;

/** User auth */
export type UserAuth = {
    userId: string | number;
    idToken: string;
    timestamp?: string | number;
    authenticated: boolean;
};
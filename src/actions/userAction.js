export const STORE_USER_INFO = "STORE_USER_INFO"


export const storeUserInfo = user => ({
    type: STORE_USER_INFO,
    payload: { user }
});
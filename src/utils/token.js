const TOKEN = "token";

export const getToken = () => {
    const tokenString = localStorage.getItem(TOKEN);
    const userToken = JSON.parse(tokenString);
    return userToken?.token
};


export const saveToken = userToken => {
    localStorage.setItem(TOKEN, JSON.stringify(userToken));
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN);
}

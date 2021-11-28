export const setuser = (data) => {
    return {
        type: "SET_USER",
        payload : data
    }

}
export const setloader = (data) => {
    console.log(data);
    return {
        type: "SET_LOADER",
        payload : data
    }

}
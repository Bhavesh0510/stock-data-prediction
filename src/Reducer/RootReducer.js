const initState = {
    userData: {},
    loading :false
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USER" : return {...state, userData:action.payload}
        case "SET_LOADER" : return {...state, loading:action.payload}
    }
    return state;
}

export default rootReducer;
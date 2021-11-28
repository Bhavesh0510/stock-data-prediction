const initState = {
    userData: {}
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USER" : return {...state, userData:action.payload}
    }
    return state;
}

export default rootReducer;
const initState = {
    userData : ""
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USER" : return {...state, userData:action.payload}
    }
    console.log(state);
    return state;
}

export default rootReducer;
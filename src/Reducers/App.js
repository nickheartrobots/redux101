const initialState = {
    isWorking: true,
    isLoading: false
}

function AppReducer(store = initialState, action) {
    switch(action.type){
        case "SET_WORKING_TRUE":
            return { ...store, isWorking: true }
        case "SET_WORKING_FALSE":
            return { ...store, isWorking: false }
        case "SET_WORKING":
            return { ...store, isWorking: action.payload }
        default:
            return store;
    }
}

export default AppReducer;
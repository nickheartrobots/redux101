


export const setWorkingTrue = () => {
    return {
        type: "SET_WORKING_TRUE"
    }
}

export const setWorkingFalse = () => {
    return {
        type: "SET_WORKING_FALSE"
    }
}

export const setWorking = (isWorking) => {
    return {
        type: "SET_WORKING",
        payload: isWorking
    }
}
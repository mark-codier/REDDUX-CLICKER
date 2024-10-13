const headerReducers = {
    followLink({navData}, {payload:pd}){
        navData = {
            ...navData,
            url: pd
        }
    },
    toggleStatus(state){
        state.status = !state.status
    }
}
export {headerReducers}
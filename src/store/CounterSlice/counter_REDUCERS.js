export const counterReducers = {
    increment(state,{payload: pd}){
      console.log(pd,state.dynamicValue)
      state.value += pd || state.dynamicValue
    },
    decrement(state,{payload: pd}){
      state.value  -= pd || state.dynamicValue
    },
    toggle(state){
      state.show = !state.show
    },
    input(state, {payload: pd}){
        state.dynamicValue = pd
    }
}
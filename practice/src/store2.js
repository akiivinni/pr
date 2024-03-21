import { createStore } from "redux"

const initialState = {

    name:"akhila",
    College:"svec",
    term1:20000,
    term2:10000
}

// reducer function

function reducer1(state=initialState,action)
{

    switch(action.type)
    {
        case "fee1":
        return {...state,term1:state.term1+ +action.payload}

        case "fee2":
            return {...state,term2:state.term2+ +action.payload}

            default:
                return state

    }

}
const store = createStore(reducer1)
console.log(store.getState())

store.dispatch({type:"fee1",payload:10000})
console.log(store.getState())
store.dispatch({type:"fee2",payload:20000})
console.log(store.getState())
store.dispatch({type:"fee3",payload:50000})
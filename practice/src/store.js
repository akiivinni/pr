import { createStore } from 'redux'; 

const initialState = {
    name: "",
    age: 23,
    balance: 0,
    mobilenumber: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "deposit":
            return { ...state, balance: state.balance + +action.payload };
        case "withdraw":
            return { ...state, balance: state.balance - +action.payload };
        case "mobilenumber":
            return { ...state, mobilenumber: action.payload }; 
        default:
            return state;
    }
}

const store = createStore(reducer); 

console.log(store.getState()); 
store.dispatch({ type: "deposit", payload: 1000 });
console.log(store.getState()); 
store.dispatch({ type: "withdraw", payload: 1000 });
console.log(store.getState()); 
store.dispatch({ type: "mobilenumber", payload: 6302077419 });
console.log(store.getState()); 

export default store; 
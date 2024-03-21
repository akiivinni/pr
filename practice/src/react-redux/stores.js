import { createStore } from "redux";

const initialState = {
    name: "arjun",
    age: 20,
    actualfee: 20000,
    studies: "fifth"
};

function studentReducer(state = initialState, action) {
    switch (action.type) {
        case "halfyearly":
            return { ...state, actualfee: state.actualfee + action.payload };
        case "annually":
            return { ...state, actualfee: state.actualfee + action.payload };
        default:
            return state;
    }
}

const store = createStore(studentReducer);

console.log(store.getState());

store.dispatch({ type: "halfyearly", payload: 25000 }); 
console.log(store.getState());

store.dispatch({ type: "annually", payload: 30000 }); 
console.log(store.getState());

export default store; 

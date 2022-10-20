# redux 4 step
//state </br>
//action </br>,
//reducer</br>
//store---->getState(),dispatch(),subscribe() </br>
-----------------------------------
//action identifire
const INCREMENT = "increment";
const DECREMENT = "decrement";
///state
const initiaState = {
    count: 0,
};

///action 2ta type thake :1->type,2->payload
const incrementCounter = () => {
    return {
        type: INCREMENT,
        payload: { user: "feroz khan" },
    };
};
const decrementCounter = () => {
    return {
        type: DECREMENT,
        payload: { user: "feroz khan" },
    };
};

/// reducer

const reducer = (state = initiaState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };

        default:
            return state;
    }
};

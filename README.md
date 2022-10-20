# Redux 4 step

    1. state </br>
    2. action </br>
    3. reducer</br>
    4. store---->getState(),dispatch(),subscribe() </br>
-----------------------------------
# Cction identifire
    const INCREMENT = "increment";<br>
    const DECREMENT = "decrement";<br>
------------------------------------
# state
    const initiaState = {
        count: 0,
    };
---------------------
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

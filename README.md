# Redux 4 step

    1. state </br>
    2. action </br>
    3. reducer</br>
    4. store---->getState(),dispatch(),subscribe() </br>
-----------------------------------
# Cction identifire
```javascript
    const INCREMENT = "increment";
    const DECREMENT = "decrement";
```
------------------------------------
# state
```javascript
    const initiaState = {
        count: 0,
    };
 ```
---------------------
# Action 2ta type hoye thake :1->type,2->payload

```javascript
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
```

# Reducer
```javascript
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
```

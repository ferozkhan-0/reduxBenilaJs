// select dom elements
const counterEl = document.getElementById("counter");
const addButtonEl = document.getElementById("addButton");
const conterContainer = document.getElementById("contercontainer");

// initial state
const initialState = [
    {
        id: 0,
        value: 0,
        incrementBy: 1,
        decrementBy: 1,
    },
];
///initial identifire
const ADD_COUNTER = "addCounter";

const addCounter = () => {
    return {
        type: ADD_COUNTER,
    };
};
//helper function
function nextCounterId(counters) {
    const maxId = counters.reduce(
        (maxId, counter) => Math.max(counter.id, maxId),
        -1
    );
    return maxId + 1;
}

const counterReducer = (state = initialState, action) => {
    if (action.type == ADD_COUNTER) {
        return [
            ...state,
            {
                id: nextCounterId(state),
                value: 0,
                incrementBy: Math.floor(Math.random() * 10 + 1),
                decrementBy: Math.floor(Math.random() * 10 + 1),
            },
        ];
    }
};
const store = Redux.createStore(counterReducer);
const render = () => {
    const state = store.getState();
    let counterMarkup = "";
    state.forEach((counter) => {
        counterMarkup += `<div class="mx-auto max-w-md mt-10 space-y-5">
            <div
                class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
            >
                <div>
                    <div id="counter" class="text-2xl font-semibold">${counter.value}</div>
                </div>

                <div class="flex space-x-3">
                    <button
                        id="increment"
                        class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        onclick="incrementHandler(${counter.id},${counter.incrementBy})"
                    >
                        Increment
                    </button>
                    <button
                        id="decrement"
                        class="bg-red-400 text-white px-3 py-2 rounded shadow"
                        onclick="incrementHandler(${counter.id},${counter.decrementBy})"
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>`;
    });
    conterContainer.innerHTML = counterMarkup;
};
render();
store.subscribe(render);

addButtonEl.addEventListener("click", () => {
    store.dispatch(addCounter());
});

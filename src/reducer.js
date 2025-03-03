let state

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    case "counter/decrease":
        return { count: state.count - 1}
    default:
      return state;
  }
}

function dispatch(action) {
    state = reducer(state, action);
    render();
}

function render() {
    const container = document.getElementById("container");
    container.textContent = state.count;
}

const button = document.getElementById("button");

button.addEventListener("click", () => {
  dispatch({ type: "counter/increment" });
});

const button2 = document.getElementById("new_button");

button2.addEventListener("click", () => {
    dispatch({ type: "counter/decrease" });
});

dispatch({type: '@@INIT'})
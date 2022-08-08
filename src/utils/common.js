export const handleIncrementDecrement = (counter, dispatch, id, state, type) => {
    let counterState = [...state.state];
    const index = counterState.findIndex((c) => c.id === id);
    if (type === "Increment") {
        counter.count += 1;
    } else {
        counter.count -= 1;
    }

    counterState.splice(index, 1, counter);

    dispatch({
      type: "UPDATE_COUNTER",
      payload: counterState,
    });
}
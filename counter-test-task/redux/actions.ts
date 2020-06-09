export enum Actions {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export const increment = () => {
  console.log(1)
  return {
    type: Actions.INCREMENT,
  };
}

export const incrementAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

export const decrement = () => {
  return {
    type: Actions.DECREMENT,
  };
}

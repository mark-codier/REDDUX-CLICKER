export default function handleActions(sliceActions, dispatch) {
  function handleDispatch(fn) {
    return (pd = 0) => dispatch(fn(pd));
  }
  const arrOfActions = Object.keys(sliceActions); // [increment, decrement, toggle...]
  const newObjOfActions = arrOfActions.reduce((acc, item) => {
    acc[item] = handleDispatch(sliceActions[item]); // { increment: dispatch(increment), decrement: dispatch(decrement),...  }
    return acc;
  }, {});
  return newObjOfActions;
}

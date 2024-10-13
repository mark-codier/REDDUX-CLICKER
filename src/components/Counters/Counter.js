import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../store/CounterSlice/counter_SLICE";
import handleActions from "../../store/handleActions";
import { useMemo } from "react";
const Counter = ({state}) => {
  const dispatch = useDispatch()
  const {increment, decrement, toggle, input} = handleActions(counterActions['fn'], dispatch)
  const {value, show} = state
  return useMemo(()=>{
  return (
    <main className={classes.counter}>
      <h1>Redux Functional-Counter</h1>
      <div className={classes.smallCounter}>
        <button onClick={() => increment(1)}>+</button>
        {show && <div className={classes.value}>-- {value} --</div>}
        <button onClick={() => {decrement(1)}}>-</button>
      </div>
      <div className={classes.input}>
        <label htmlFor="counterInput">Your dynamic value:</label>
        <input
          name="counterInput"
          defaultValue={1}
          onChange={(e) => input(parseInt(e.target.value))}
        />
      </div>
      <div className={classes.button}>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
      </div>
        <button className={classes.hero} onClick={() => toggle()}>Toggle Counter</button>
    </main>
  );
},[state])}
export default Counter;
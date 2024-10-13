import { Component } from "react";
import classes from "./Counter.module.css";
import { connect } from "react-redux";
import { counterActions } from "../../store/CounterSlice/counter_SLICE";
import handleActions from "../../store/handleActions";
class Counter extends Component {
  render() {
    const {increment, decrement, toggle, value, show } = this.props
    return (
      <main className={classes.counter}>
        <h1>Redux Class-Counter</h1>
        {show && <div className={classes.value}>-- {value} --</div>}
        <button className={classes.hero} onClick={() => increment()}>Increment</button>
        <button className={classes.hero} onClick={() => decrement()}>Decrement</button>
        <button className={classes.hero} onClick={() => toggle()}>Toggle Counter</button>
      </main>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  const obj = handleActions(counterActions['cl'], dispatch);
  return obj;
};
const mapStateToProps = (state) => {return state.classCounter}
export default connect(mapStateToProps /**We can replace this function just with CounterReduce */, mapDispatchToProps)(Counter);

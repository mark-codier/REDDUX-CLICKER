import Counter from "./components/Counters/Counter";
import CounterClass from "./components/Counters/CounterClass";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import UserProfile from "./components/UserProfile/UserProfile";
import Form from "./components/Form/Form.js";
function App() {
  const fnSliceState = useSelector((state) => state.functionalCounter);
  const headerSliceState = useSelector((state) => state.headerSlice);
  const logSliceState = useSelector((state) => state.logSlice);
  const { status } = headerSliceState;
  return (
    <>
      <Header state={headerSliceState} />
      {status && <UserProfile state={logSliceState} />}
      {!status && <Form state={logSliceState}/>}
      <Counter state={fnSliceState} />
      <CounterClass />
    </>
  );
}
export default App;

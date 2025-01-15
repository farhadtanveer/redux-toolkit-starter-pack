import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h1>Counter with redux</h1>
      <button onClick={handleIncrement}>Increament</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decreament</button>
    </>
  );
}

export default App;

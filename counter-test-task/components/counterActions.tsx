import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementAsync, decrement } from '../redux/actions'
import Counter from "./counter"

const CounterActions = () => {
  const count: number = useSelector((state: number) => state)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>
        <Counter currentCount={count}/>
      </h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementAsync())}>+1 (async)</button>
    </div>
  )
}

export default CounterActions;
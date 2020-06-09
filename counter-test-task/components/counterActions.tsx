import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementAsync, decrement } from '../redux/actions'
import Counter from "./counter"
import { Button, ButtonContainer, Middle, Top } from '../styled/home'

const CounterActions = () => {
  const count: number = useSelector((state: number) => state)
  const dispatch = useDispatch()

  return (
    <div>
      <Top>
        <Counter currentCount={count}/>
      </Top>
      <Middle>
        <ButtonContainer>
          <Button onClick={() => dispatch(increment())}>+1</Button>
          <Button onClick={() => dispatch(decrement())}>-1</Button>
          <Button onClick={() => dispatch(incrementAsync())}>+1 (async)</Button>
        </ButtonContainer>
      </Middle>
    </div>
  )
}

export default CounterActions;
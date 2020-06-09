import { Actions } from './actions'
import { Action } from 'redux'

const counterReducer = (state = 0, action: Action): number => {
  switch (action.type) {
    case Actions.INCREMENT:
      return state + 1
    case Actions.DECREMENT: 
      return state - 1
    default: 
      return state
  }
}

export default counterReducer;

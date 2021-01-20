import { RECEIVE_JOKE } from '../actions/joke';

const joke = (state={}, action: any) => {
  switch(action.type) {
    case RECEIVE_JOKE : 
      return {
        ...state,
        ...action.joke
      }
    default :
      return state;
  }
}

export default joke;
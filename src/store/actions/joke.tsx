export const RECEIVE_JOKE = 'RECEIVE_JOKE';
import IJokeModel from '../../models/joke-model';

export const receiveJoke = (joke: IJokeModel) => {
  return {
    type: RECEIVE_JOKE,
    joke
  }
}
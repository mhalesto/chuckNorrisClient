import IJokeModel from '../../models/joke-model';
export const RECEIVE_JOKE = 'RECEIVE_JOKE';

export const receiveJoke = (joke: IJokeModel) => {
  return {
    type: RECEIVE_JOKE,
    joke
  }
}
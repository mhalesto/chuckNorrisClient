export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategories = (categories: any) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}
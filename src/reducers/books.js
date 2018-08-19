const books = (state = ['something'], action) => {
  switch (action.type) {
    case 'POPULATE_BOOKS':
      return action.books
    default:
      return state
  }
}
export default books;
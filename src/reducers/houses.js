const houses = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_HOUSES':
      return action.houses
    default:
      return state
  }
}
export default houses;
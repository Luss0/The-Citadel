const characters = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_CHARACTERS':
      return action.characters
    default:
      return state
  }
}
export default characters;
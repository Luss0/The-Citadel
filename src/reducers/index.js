import { combineReducers } from 'redux'
import books from './books';
import houses from './houses';
import characters from './characters';


export default combineReducers({
  books, houses, characters
})
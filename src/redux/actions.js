/*
* action types
*/

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// other constants

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// ACTION CREATORS

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

// you could export the following constants to call them directly in the codebase (you also wouldn't need the constants above)
// const boundAddTodo = (text) => dispatch(addTodo(text))
// const boundToggleTodo = (index) => dispatch(toggleTodo(index))
// const boundSetVisibilityFilter = (filter) => dispatch(setVisibilityFilter(filter))
// you could also use bindActionCreators() to dispatch all 
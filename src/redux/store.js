import { createStore } from 'redux'
import todoApp from './reducers'

// let store = createStore(todoApp) - this won't work because let would just define it in the store scope, that's why tutorial 
// has it in the applications index.js file

// instead you would need to 
// i'm personally a fan of this because you keep store file separate instead of adding the two top lines for example into the 
// index file
const store = createStore(todoApp)
export default store
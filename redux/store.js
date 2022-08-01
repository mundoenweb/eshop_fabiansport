import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import {saveState} from './storeSaveAndLoad'
// import thunk from "redux-thunk"
import {
  carritoReducer,
  userReducer,
  likeReducer,
  newProduct,
  appState
} from "./reducers"

const appReducer = combineReducers({
  carritoReducer,
  userReducer,
  likeReducer,
  newProduct,
  appState,
})

const rootReducer = (state, action) => {
  if (action.type === "INITIAL_STATE" ) return action.stateInitial || state
  return appReducer(state, action)
}

const store = createStore(
  rootReducer,
  composeWithDevTools()
  )
  // composeWithDevTools(applyMiddleware(thunk))

store.subscribe( function () { // escucha cualquier cambio en el estado
  saveState(store.getState())
})

  export default store
//composeWithDevTools(applyMiddleware(thunk))

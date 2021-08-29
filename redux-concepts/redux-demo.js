const redux = require('redux');

const initialState = {
  counter: 0
}

const counterReducer = (state = initialState, action) => {
  if(action.type === 'increment') {
    return {
      counter: state.counter + 1
    }
  }

  if(action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }

  return initialState;
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  console.log('latestState');
  const latestState = store.getState()
  console.log(latestState);
}
store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'})
store.dispatch({type: 'increment'})
store.dispatch({type: 'increment'})
// store.dispatch({type: 'decrement'})
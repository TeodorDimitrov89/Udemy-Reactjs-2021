import {useEffect, useState} from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = actionIdentifier => {
    const newState = actions[actionIdentifier](globalState);

    globalState = {...globalState, ...newState};

    for (const listener of listeners) {
      listener(globalState);
    }
  }

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners.filter(li => li !== setState);
    }
  },[setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initState) => {
  if(initState) {
    globalState = {...globalState, initState};
  }

  actions = {...actions, userActions}
};

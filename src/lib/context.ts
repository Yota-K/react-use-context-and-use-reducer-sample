import { Dispatch, createContext } from 'react';
import { State, Action } from './reducer';

export const formContext = createContext({} as {
  state: State;
  dispatch: Dispatch<Action>;
});

import { useReducer } from 'react';
import './App.css'
import { initialState, reducer } from './lib/reducer';
import { formContext } from './lib/context';
import Form from './components/Form';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <formContext.Provider value={{ state, dispatch }}>
      <h1>useContextとuseReducerを使用したフォームの状態管理</h1>
      <Form />
    </formContext.Provider>
  )
}

export default App

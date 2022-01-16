import React from 'react';
import { State } from '../lib/reducer';

type Props = {
  state: State;
};

const InputView: React.FC<Props> = ({ state }) => {
  return (
    <>
      <div>name: { state.name }</div>
      <div>tel: { state.tel }</div>
      <div>email: { state.email }</div>
      <div>content: { state.content }</div>
    </>
  );
};

export default InputView;

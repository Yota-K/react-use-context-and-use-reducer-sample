import React, { useContext } from 'react';
import { formContext } from '../lib/context';

type Props = {
  label: string;
  name: string;
  value: string;
};

const Input: React.FC<Props> = ({ label, name, value }) => {
  const { state, dispatch } = useContext(formContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    switch (name) {
      case 'name':
        dispatch({
          type: 'EditForm',
          payload: {
            ...state,
            name: value,
          }
        });
      break;

      case 'tel':
        dispatch({
          type: 'EditForm',
          payload: {
            ...state,
            tel: value,
          }
        });
      break;

      case 'email':
        dispatch({
          type: 'EditForm',
          payload: {
            ...state,
            email: value,
          }
        });
      break;
    }
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;

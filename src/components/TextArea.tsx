import React, { useContext } from 'react';
import { formContext } from '../lib/context';

type Props = {
  label: string;
  name: string;
  value: string;
};

const TextArea: React.FC<Props> = ({ label, name, value }) => {
  const { state, dispatch } =useContext(formContext);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    dispatch({
      type: 'EditForm',
      payload: {
        ...state,
        content: value,
      },
    });
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea cols={50} rows={10} value={value} onChange={handleChange}></textarea>
    </div>
  );
};

export default TextArea;

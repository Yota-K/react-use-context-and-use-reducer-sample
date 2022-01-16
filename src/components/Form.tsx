import { useContext } from 'react';
import Input from './Input'
import TextArea from './TextArea'
import InputView from './InputView'
import { formContext } from '../lib/context';

const Form = () => {
  const { state } = useContext(formContext);

  return (
    <form>
      <InputView state={state} />
      <div>
        <Input label="名前" name="name" value={state.name} />
        <Input label="電話番号" name="tel" value={state.tel}/>
        <Input label="メールアドレス" name="email" value={state.email} />
        <TextArea label="本文" name="content" value={state.content}/>
        <button type="submit">送信</button>
      </div>
    </form>
  );
};

export default Form;

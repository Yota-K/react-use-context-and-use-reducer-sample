export type State = {
  name: string;
  tel: string;
  email: string;
  content: string;
};

export const initialState: State = {
  name: '',
  tel: '',
  email: '',
  content: '',
};

export type Action = {
  type: 'EditForm';
  payload: State;
};

export const reducer = (state: State, action: Action) => {
  if (action.type) {
    return {
      ...state,
      name: action.payload.name,
      tel: action.payload.tel,
      email: action.payload.email,
      content: action.payload.content,
    }
  } else {
    return state;
  }
}

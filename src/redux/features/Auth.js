const initialState = {
  signingUp: false,
  successSingUp: false,
  error: null,
  token: localStorage.getItem('token'),
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/signup/pending':
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case 'auth/signup/fulfilled':
      return {
        ...state,
        signingUp: false,
        successSingUp: true,
      };
    case 'auth/signup/rejected':
      return {
        ...state,
        signingUp: false,
        error: action.error,
				successSingUp: false,
      };
    case 'auth/signin/pending':
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case 'auth/signin/fulfilled':
      return {
        ...state,
        signingUp: false,
        token: action.payload.token,
      };
    case 'auth/signin/rejected':
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const createUser = (name, email, login, password) => {
  return async (dispatch) => {
    dispatch({ type: 'auth/signup/pending' });
    const response = await fetch('http://localhost:4000/users/regist', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        login,
        password,
      }),
      headers: { 'Content-type': 'application/json' },
    });

    const json = await response.json();

    if (json.error) {
      dispatch({ type: 'auth/signup/rejected', error: json.error });
    } else {
      dispatch({ type: 'auth/signup/fulfilled', payload: json });
    }
  };
};

export const authUser = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: 'auth/signin/pending' });
    const response = await fetch('http://localhost:4000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        login,
        password,
      }),
      headers: { 'Content-type': 'application/json' },
    });

    const json = await response.json();

    if (json.error) {
      dispatch({ type: 'auth/signin/rejected', error: json.error });
    } else {
      dispatch({ type: 'auth/signin/fulfilled', payload: json });
      localStorage.setItem('token', json.token);
    }
  };
};

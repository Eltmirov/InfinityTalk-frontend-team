const initialState = {
  userList: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "users/load/pending":
      return {
        ...state,
      };
    case "users/load/fulfilled":
      return {
        ...state,
        userList: action.payload,
      };
    default:
      return state;
  }
};

export const loadUsers = () => {
  return async (dispatch) => {
    await dispatch({ type: "users/load/pending" });
    await fetch("http://localhost:4000/users")
      .then(async (res) => await res.json())
      .then(async (users) => {
        await dispatch({
          type: "users/load/fulfilled",
          payload: users,
        });
      });
  };
};

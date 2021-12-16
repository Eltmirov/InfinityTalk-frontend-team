const initialState = {
  user: [],
  token: null,
  loading: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "users/profile/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const fetchUserProfile = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:4000/users/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      const json = await response.json();
      dispatch({ type: "users/profile/fetch/fulfilled", payload: json });
    } catch (e) {
      //
    }

  };
};

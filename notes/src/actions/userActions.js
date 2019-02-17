import * as blockstack from "blockstack";

export const FETCH_USER_DATA = "FETCH_USER_DATA";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_HANDLE_LOGIN = "USER_HANDLE_LOGIN";
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";

export const fetchUserData = () => {
  const type = FETCH_USER_DATA;

  if (blockstack.isUserSignedIn()) {
    return {
      type,
      payload: {
        isAuthenticated: true,
        profile: blockstack.loadUserData()
      }
    };
  } else if (blockstack.isSignInPending()) {
    return {
      type,
      payload: {
        isLoginPending: true
      }
    };
  }

  return { type };
};

export const loginWithBlockstack = () => {
  // Open the Blockstack browser for signin, after choosing an ID,
  // redirect back to the login page
  blockstack.redirectToSignIn(`${window.location.origin}/handle-login`);
  return { type: USER_LOGIN };
};

export const userLogout = () => {
  blockstack.signUserOut();
  return { type: USER_LOGOUT };
};

export const userLoginError = error => {
  return { type: USER_LOGIN_ERROR, payload: error };
};

export const handleBlockstackLogin = () => {
  return dispatch => {
    dispatch({ type: USER_HANDLE_LOGIN });

    // Handle sign from Blockstack after redirect from Blockstack browser.
    // Once signin completes -> redirect to an authenticated route
    return blockstack.handlePendingSignIn().then(
      res => {
        window.location.replace(`${window.location.origin}/`);
        dispatch({ type: USER_LOGIN_SUCCESS });
        dispatch(fetchUserData());
      },
      error => dispatch(userLoginError(error))
    );
  };
};

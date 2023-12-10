import axios from "axios";
import { server } from "../store";

// export const loadUser = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "loadUserRequest",
//     });
//     const config = { headers: { "Content-Type": "application/json" } };

//     const { data } = await axios.get(`${server}/api/v1/me`, {
//       withCredentials: true,
//     });
//     dispatch({
//       type: "loadUserSuccess",
//       payload: data.user,
//     });
//   } catch (error) {
//     console.log("userPage", error);
//     dispatch({
//       type: "loadUserFail",

//       payload: error.response.data.message,
//     });
//   }
// };

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(`${server}/api/v1/me`);

    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      config
    );
    console.log(data);

    dispatch({ type: "loginSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};

// Register

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });

    const config = { headers: { "Content-Type": "application/json" } };
    console.log(name, email, password);
    const { data } = await axios.post(
      `${server}/register`,
      { name, email, password },
      config
    );

    dispatch({ type: "registerSuccess", payload: data.user });
  } catch (error) {
    console.log("userData", error);

    dispatch({
      type: "registerFail",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });

    await axios.get(`${server}/logout`);

    dispatch({
      type: "logoutSuccess",
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};

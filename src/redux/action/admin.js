import axios from "axios";
import { server } from "../store";

export const getAdminStats = () => async (dispatch) => {
  try {
    dispatch({ type: "getDashboardStatsRequest" });

    const { data } = await axios.get(`${server}/api/v1/admin/stats`);
    dispatch({ type: "getDashboardStatsSuccess", payload: data });
  } catch (error) {
    console.log("stuck", error);
    dispatch({
      type: "getDashboardStatsFail",
      payload: error.response.data.message,
    });
  }
};
export const getAdminUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminUsersRequest" });

    const { data } = await axios.get(`${server}/api/v1/admin/users`);
    console.log("adminDataNew", data);
    dispatch({ type: "getAdminUsersSuccess", payload: data.user });
  } catch (error) {
    dispatch({
      type: "getAdminUsersFail",
      payload: error.response.data.message,
    });
  }
};

export const getAdminOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminOrdersRequest" });

    const { data } = await axios.get(`${server}/api/v2/admin/orders`);

    dispatch({ type: "getAdminOrdersSuccess", payload: data.orders });
  } catch (error) {
    dispatch({
      type: "getAdminOrdersFail",
      payload: error.response.data.message,
    });
  }
};

export const processOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: "processOrderRequest" });

    const { data } = await axios.get(`${server}/api/v2/admin/order/${id}`);

    dispatch({ type: "processOrderSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "processOrderFail",
      payload: error.response.data.message,
    });
  }
};

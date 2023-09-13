import axiosWrapper from "../network/axiosWrapper";
import { API_ENDPOINT, METHODS } from "./config";

export const getEventList = () => {
    return axiosWrapper(API_ENDPOINT.GET_EVENT_LIST, {
    method: METHODS.GET,
  });
}
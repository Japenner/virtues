import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export type User = {
  id: string;
  created_at: string;
  updated_at: string;
};

export const UserAPI = {
  get: async function (id: string, cancel = false) {
    const response = await api.request({
      url: `/users/${id}`,
      method: "GET",
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the user returned by the API
    return response.data.user;
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/users/",
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.users;
  },
  search: async function (name: string, cancel = false) {
    const response = await api.request({
      url: "/users/search",
      method: "GET",
      params: {
        name: name,
      },
      signal: cancel
        ? cancelApiObject[this.search.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.users;
  },
  create: async function (user: User, cancel = false) {
    await api.request({
      url: `/users`,
      method: "POST",
      data: user,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
};

// defining the cancel API object for userAPI
const cancelApiObject = defineCancelApiObject(UserAPI);

import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export type Virtue = {
  id: string;
  description: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export const VirtueAPI = {
  get: async function (id: string, cancel = false) {
    const response = await api.request({
      url: `/virtues/${id}`,
      method: "GET",
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the virtue returned by the API
    return response.data.virtue;
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/virtues/",
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.virtues;
  },
  search: async function (name: string, cancel = false) {
    const response = await api.request({
      url: "/virtues/search",
      method: "GET",
      params: {
        name: name,
      },
      signal: cancel
        ? cancelApiObject[this.search.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.virtues;
  },
  create: async function (virtue: Virtue, cancel = false) {
    await api.request({
      url: `/virtues`,
      method: "POST",
      data: virtue,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
};

// defining the cancel API object for virtueAPI
const cancelApiObject = defineCancelApiObject(VirtueAPI);

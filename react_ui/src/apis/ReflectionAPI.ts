import { User } from "./UserAPI";
import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export type Reflection = {
  id: string;
  user: User;
  week_number: string;
  created_at: string;
  updated_at: string;
};

export const ReflectionAPI = {
  get: async function (id: string, cancel = false) {
    const response = await api.request({
      url: `/reflections/${id}`,
      method: "GET",
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the reflection returned by the API
    return response.data.reflection;
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/reflections/",
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.reflections;
  },
  // search: async function (name: string, cancel = false) {
  //   const response = await api.request({
  //     url: "/reflections/search",
  //     method: "GET",
  //     params: {
  //       name: name,
  //     },
  //     signal: cancel
  //       ? cancelApiObject[this.search.name].handleRequestCancellation().signal
  //       : undefined,
  //   });

  //   return response.data.reflections;
  // },
  create: async function (reflection: Reflection, cancel = false) {
    await api.request({
      url: `/reflections`,
      method: "POST",
      data: reflection,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
};

// defining the cancel API object for reflectionAPI
const cancelApiObject = defineCancelApiObject(ReflectionAPI);

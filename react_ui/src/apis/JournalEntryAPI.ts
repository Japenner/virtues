import { Virtue } from "./VirtueAPI";
import { User } from "./UserAPI";
import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export type JournalEntry = {
  id: string;
  user: User;
  virtue: Virtue;
};

export const JournalEntryAPI = {
  get: async function (id: string, cancel = false) {
    const response = await api.request({
      url: `/journal_entries/${id}`,
      method: "GET",
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the journal entry returned by the API
    return response.data.journalEntry;
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/journal_entries/",
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.journalEntries;
  },
  search: async function (name: string, cancel = false) {
    const response = await api.request({
      url: "/journal_entries/search",
      method: "GET",
      params: {
        name: name,
      },
      signal: cancel
        ? cancelApiObject[this.search.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.journalEntries;
  },
  create: async function (journalEntry: JournalEntry, cancel = false) {
    await api.request({
      url: `/journalEntries`,
      method: "POST",
      data: journalEntry,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
};

// defining the cancel API object for journalEntryAPI
const cancelApiObject = defineCancelApiObject(JournalEntryAPI);

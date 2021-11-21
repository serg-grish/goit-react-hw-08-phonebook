
import { createSelector } from '@reduxjs/toolkit';

export const getContacts = (state) => state.contacts.item;
export const getFilter = (state) => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
  },
);

let selector = {
  getContacts,
  getFilter,
  getFilteredContacts,
};

export default selector;
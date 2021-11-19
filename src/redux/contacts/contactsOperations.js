import * as contactsApi  from '../../servises/contactsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async () => {
    const contacts = await contactsApi.getContactsFromApi();
    return contacts;
  },
);

export const addContacts = createAsyncThunk(
  'contact/addContacts',
  async (contact) => {
    const data = await contactsApi.addContactsInApi(contact);
    return data;
  },
);

export const deleteContacts = createAsyncThunk(
  'contact/deleteContacts',
  async (id) => {
    await contactsApi.deleteContactsFromApi(id);
    return id;
  },
);

import axios from "axios";

axios.defaults.baseURL = 'https://61957e7e74c1bd00176c6d8c.mockapi.io';


export async function addContactsInApi(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}
export async function getContactsFromApi() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function deleteContactsFromApi(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

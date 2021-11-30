const BASE_URL = 'http://localhost:3000';
//USERS
const REGISTER = `${BASE_URL}/user/register`;
const LOGIN = `${BASE_URL}/user/login`;


let bearer;

bearer = `bearer ${JSON.parse(localStorage.getItem('token'))}`;

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Authorization: bearer,
};

export const loginUser = async form => {
  const loginFetch = await fetch(LOGIN, {
    method: 'POST',
    credentials: 'include',
    headers: headers,
    body: JSON.stringify(form),
  });
  const res = await loginFetch.json();
  localStorage.setItem('user', JSON.stringify(res.data.user));
  localStorage.setItem('token', JSON.stringify(res.data.token));
  if (!loginFetch.ok) {
    throw new Error('No se ha podido realizar el login', res.message);
  }
  return res;
};

export const registerUser = async form => {
  const registerFetch = await fetch(REGISTER, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(form),
  });
  const res = await registerFetch.json();
  if (!registerFetch.ok) {
    throw new Error('No se ha podido realizar el registro', res.message);
  }
  return res;
};
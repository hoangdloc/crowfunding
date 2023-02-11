import axios from '../../api/axios';

export const requestAuthRegister = (data) => {
  return axios.post('/auth/register', {
    ...data
  });
};

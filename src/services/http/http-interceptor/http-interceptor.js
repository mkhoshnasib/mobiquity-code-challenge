import axios from 'axios';
import Constants from '../../../globals/constants';

const client = axios.create({
  baseURL: Constants.endpointUrl,
});

const request = (options) => {
  const onSuccess = response => response;
  const onError = error => Promise.reject(error);
  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;

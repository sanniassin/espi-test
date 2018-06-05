import axios from 'axios';


const request = (url, method, data, options = {}) => {
  const { headers, cancelToken } = options;
  let params = null;

  if (method === 'GET' && data) {
    params = data;
    data = null;
  }

  return axios({
    url,
    method,
    data,
    params,
    headers,
    cancelToken
  });
};

export default {
  get(url, ...args) {
    return request(url, 'GET', ...args);
  },
  post(url, ...args) {
    return request(url, 'POST', ...args);
  },
  put(url, ...args) {
    return request(url, 'PUT', ...args);
  },
  patch(url, ...args) {
    return request(url, 'PATCH', ...args);
  },
  delete(url, ...args) {
    return request(url, 'DELETE', ...args);
  }
};

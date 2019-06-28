import axios from 'axios';
 
/**
 * 模块说明:有api_token的请求
 */
export const request = (api, method = 'GET', params = {}, config = {}) => {
  const data = (method === 'GET') ? 'params' : 'data';
  let headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  };
  if (config.headers) {
    headers = { ...headers, ...config.headers }
  }
  return new Promise((resolve, reject) => {
    axios({
      url: api,
      method,
      [data]: params,
      headers,
    }).then(resolve).catch(reject);
  });
};
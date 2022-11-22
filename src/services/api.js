export const apiRequest = (url, options) => {
  const { method = "GET", data, headers = {} } = options || {};

  const defaultHeaders = { "Content-Type": "application/json" };
  const reqHeaders = {
    ...defaultHeaders,
    ...headers,
  };

  return fetch(url, { method, headers: reqHeaders }).then(resp => resp.json());
};

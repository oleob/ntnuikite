import axios from 'axios';

const getRequest = url =>
  new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => reject(err));
  });

const postRequest = (url, body) =>
  new Promise((resolve, reject) => {
    axios
      .post(url, body)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });

export { getRequest, postRequest };

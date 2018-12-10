import http from '../../../../utils/http';

const api = process.env.REACT_APP_API;

class WithSidebarApi {
  static getTodoLists = () => {
    return new Promise((resolve, reject) => {
      http.get(`${api}/lists`)
        .then(res => {
          if (res.status === 204) {
            resolve([]);
          }

          resolve([...res.data]);
        })
        .catch(err => {
          if (err.response && err.response.data)
            reject({ ...err.response.data });

          reject({ ...err });
        });
    });
  }
}

export default WithSidebarApi;

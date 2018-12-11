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

  static createTodoList = (payload) => {
    return new Promise((resolve, reject) => {
      http.post(`${api}/list`, payload)
        .then(res => {
          if (res.status === 204) {
            resolve({});
          }

          resolve({...res.data});
        })
        .catch(err => {
          if (err.response && err.response.data)
            reject({ ...err.response.data });

          reject({ ...err });
        });
    });
  }

  static deleteTodoList = (code) => {
    return new Promise((resolve, reject) => {
      http.delete(`${api}/list/${code}`)
        .then(res => {
          if (res.status === 204) {
            resolve({});
          }

          resolve({...res.data});
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

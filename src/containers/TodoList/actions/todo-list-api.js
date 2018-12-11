import http from '../../../utils/http';

const api = process.env.REACT_APP_API;

class TodoListApi {
  static getTodosListDetails = (code) => {
    return new Promise((resolve, reject) => {
      http.get(`${api}/list/${code}`)
        .then(res => {
          if (res.status === 204) {
            resolve({});
          }

          resolve({...res.data[0]});
        })
        .catch(err => {
          if (err.response && err.response.data)
            reject({ ...err.response.data });

          reject({ ...err });
        });
    });
  }

  static getTodos = (code) => {
    return new Promise((resolve, reject) => {
      http.get(`${api}/list/${code}/items`)
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

export default TodoListApi;

const GATEWAY = 'http://localhost:3000';

export function post(path, body) {
  return fetch(GATEWAY + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json());
}
export function get(path) {
  return fetch(GATEWAY + path).then(res => res.json());
}

export function put(path, id, body) {
  return fetch(GATEWAY + path + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json());
}

export function Delete(path, id) {
  return fetch(GATEWAY + path + `${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
}

export function postImg(path, body) {
  return fetch(GATEWAY + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json());
}

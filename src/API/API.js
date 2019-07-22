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

export function put(path, order) {
  return fetch(GATEWAY + path + `${order.userID}/${order.proID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
}

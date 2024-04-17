const base_url = 'http://localhost:8000/employee/';

export function get(urlParam) {
  return fetch(`${base_url}${urlParam}`).then((response) => response.json());
}

export function post(urlParam, bodyParams) {
  let params = {
    method: 'POST',
    body: JSON.stringify(bodyParams),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  return fetch(`${base_url}${urlParam}`, params).then((response) =>
    response.json(),
  );
}

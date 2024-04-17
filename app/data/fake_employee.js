import { get, post } from './API';

export function addNewEmployee(employee) {
  let urlParam = employee?.id || 'add';
  return post(urlParam, employee);
}

var employees = [];
function setEmployees(data) {
  employees = [...data];
  console.log(employees);
}

export function getAllEmployee() {
  return get('all').then((data) => {
    setEmployees(data);
    return employees;
  });
}

export function getEmployee(employee_id) {
  return get(employee_id).then((data) => {
    setEmployees(data);
    return employees;
  });
}
export function deleteEmployee(id) {
  return post('delete', { id });
}

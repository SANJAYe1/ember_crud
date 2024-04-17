import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { addNewEmployee, getEmployee } from '../data/fake_employee';

export default class EmployeeFormComponent extends Component {
  @service router;
  @tracked employee = {
    name: '',
    age: '',
    employee_id: '',
  };

  constructor() {
    super(...arguments);
    let { params } = this.router.currentRoute;
    let { id } = params;
    if (id > 0) {
      getEmployee(id).then((emp) => (this.employee = emp[0]));
      this.employee.age = Number(this.employee.age);
    } else {
      console.log('create');
    }
  }

  @action
  addEmployee(event) {
    let { params } = this.router.currentRoute;
    let employee = {};
    if (params.id !== 'new') {
      employee.id = params.id;
    }
    event.preventDefault();
    for (let i = 0; i < 3; i++) {
      employee[event.target[i].name] = event.target[i].value;
    }
    if (!this.validateData(employee)) return;
    addNewEmployee(employee).then((emp) => {
      this.router.transitionTo('/');
    });
    //redirect to list page
  }
  validateData(employee) {
    //name validation
    let name = employee.name.trim();
    if (name.length == 0) {
      alert('Please enter valid name');
      return false;
    }
    return true;
  }
}

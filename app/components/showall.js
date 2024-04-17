/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { deleteEmployee, getAllEmployee } from '../data/fake_employee';

export default class ShowAllComponent extends Component {
  @tracked employees = {};

  @service router;

  constructor() {
    super(...arguments);
    getAllEmployee().then((emp) => (this.employees = emp));
  }

  @action
  edit(employee) {
    let { id } = employee;
    this.router.transitionTo(`/employee/${id}`, id); // Implicitly aborts the on-going transition.
    console.log('edit');
  }

  @action
  deleteEmployee(id) {
    deleteEmployee(id).then((resp) => window.location.reload(true));
  }
}

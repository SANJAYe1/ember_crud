import EmberRouter from '@ember/routing/router';
import config from 'employee-clientv2/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('show-all-employee', { path: '/all' }),
    this.route('employee', { path: '/employee/:id' });
});

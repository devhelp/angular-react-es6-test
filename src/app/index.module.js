import config from './index.config';

import routerConfig from './index.route';
import authConfig from './auth.config';
import runBlock from './index.run';
import MainController from './main/main.controller';
import NavbarDirective from '../app/components/navbar/navbar.directive';
import Api from '../app/components/api/api.service';
import GithubRepositoryModule from './github-repository/index.module';
import RegisterDirective from '../app/components/register/register.directive';

angular
  .module('jsAnalyzerApp', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'restangular',
    'ui.router',
    'mgcrea.ngStrap',
    'satellizer',
    'checklist-model',
    'angular-loading-bar',
    'ngAnimate',
    'cfp.loadingBar',
    'frapontillo.bootstrap-switch',
    'jsAnalyzerApp.githubRepository'
  ])
  .constant('moment', moment)
  .constant('config', config())
  .config(authConfig)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('navbar', () => new NavbarDirective())
  .directive('register', () => new RegisterDirective())
  .service('Api', Api)
  .factory('_', _)
;

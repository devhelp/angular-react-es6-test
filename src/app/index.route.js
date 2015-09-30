function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('github-repository', {
      url: '/github-repository',
      templateUrl: 'app/github-repository/index.html',
      controller: 'IndexController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');

}

export default routerConfig;

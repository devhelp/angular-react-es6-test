class NavbarDirective {
  constructor() {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class NavbarController {
  constructor($auth, Api) {
    'ngInject';
    this.$auth = $auth;
    this.Api = Api;
  }

  loginWithGithub(provider) {
    this
      .$auth
      .authenticate(provider)
      .then(() => {



      });
  }
}

export default NavbarDirective;

import Register from './register.react';

class RegisterDirective {
  constructor() {
    'ngInject';
    let directive = {
      restrict: 'E',
      controller: RegisterDirectiveController,
      controllerAs: 'vm',
      bindToController: true,
      template: '<div id="appRegisterForm"></div>'
    };

    return directive;
  }
}

class RegisterDirectiveController {
  constructor(Api) {
    'ngInject';
    this.Api = Api;
    React.render(
      <Register registerUser={this.processRegister.bind(this)}/>,
      document.getElementById('appRegisterForm')
    );
  }

  processRegister(test) {
    console.log(test);
  }

}

export default RegisterDirective;

function authConfig ($authProvider) {
  'ngInject';
  $authProvider.github({
    clientId: 'a5337e754eef83eddf7e',
    url: 'http://localhost:8080/app_dev.php/api/github-login',
    scope: ['user', 'repo', 'public_repo', 'repo:status']
  })
}

export default authConfig;

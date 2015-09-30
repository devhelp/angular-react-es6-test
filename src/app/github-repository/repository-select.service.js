class RepositorySelect {
  constructor(Api) {
    'ngInject';
    this.Api = Api;
  }

  select(username, repositoryName) {
    var postData = {
      select_repository: {
        username: username,
        repositoryName: repositoryName
      }
    };
    return this
      .Api
      .call()
      .one('github')
      .one('repository')
      .post('select', postData)
  }
}

export default RepositorySelect;

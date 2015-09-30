class RepositoryList {
  constructor(Api) {
    'ngInject';
    this.Api = Api;
  }

  get() {
    return this
      .Api
      .call()
      .one('github')
      .one('repository')
      .one('list')
      .getList();
  }
}

export default RepositoryList;

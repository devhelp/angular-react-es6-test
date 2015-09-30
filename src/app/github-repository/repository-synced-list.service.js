class RepositorySyncedList {
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
      .one('sync')
      .getList();
  }
}

export default RepositorySyncedList;

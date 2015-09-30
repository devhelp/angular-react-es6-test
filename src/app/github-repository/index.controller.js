class IndexController {
  constructor(RepositoryList, RepositorySyncedList, RepositorySelect) {
    'ngInject';
    var self = this;
    self.repositories = [];
    self.syncedRepositories = [];
    this.RepositorySelect = RepositorySelect;
    RepositoryList
      .get()
      .then((repositoryListResponse) => {
        RepositorySyncedList
          .get()
          .then((syncedRepositoryList) => {
            self.repositories = repositoryListResponse;
            _.forEach(syncedRepositoryList, (value) => {
              self.syncedRepositories.push(value.id);
            });
          });
      });
  }

  selectRepository(repositoryId, checked) {
    var selectedRepository = _.find(this.repositories, { id: repositoryId });
    if (!_.isUndefined(selectedRepository) && checked === true) {
      this
        .RepositorySelect
        .select(selectedRepository.owner, selectedRepository.name);
    }
  }
}

export default IndexController;

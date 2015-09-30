import IndexController from './index.controller';
import RepositoryList from './repository-list.service';
import RepositorySyncedList from './repository-synced-list.service';
import RepositorySelect from './repository-select.service';

export default
  angular
    .module('jsAnalyzerApp.githubRepository', [])
    .controller('IndexController', IndexController)
    .service('RepositoryList', RepositoryList)
    .service('RepositorySyncedList', RepositorySyncedList)
    .service('RepositorySelect', RepositorySelect);

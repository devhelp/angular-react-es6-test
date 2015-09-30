class Api {
  constructor(Restangular, config, $window, cfpLoadingBar) {
    'ngInject';
    this.Restangular = Restangular;
    this.config = config;
    this.localStorage = $window.localStorage;
    this.cfpLoadingBar = cfpLoadingBar;
  }

  call() {
    this.cfpLoadingBar.start();
    var restConfiguration = (RestangularConfigurer) => {
      RestangularConfigurer.setBaseUrl(this.config.API_URL);
      RestangularConfigurer.setDefaultHeaders({Authorization: "Bearer " + this.localStorage.getItem('satellizer_token')});
      RestangularConfigurer.setDefaultRequestParams({'XDEBUG_SESSION_START': 'PHPSTORM'});
      RestangularConfigurer.setRequestInterceptor((elem) => {

        return elem;
      });


      RestangularConfigurer.setErrorInterceptor((response) => {
        if (response.status === 401) {

        } else if (response.status === 404) {

        } else {

        }
        this.cfpLoadingBar.complete();
        return false;
      });

      RestangularConfigurer.setResponseInterceptor((data) => {
        var extractedData = data;

        if (data.hasOwnProperty('data')) {
          if (!_.isArray(data.data)) {
            extractedData = data.data;
          }
        }

        return extractedData;
      });
    };

    return this.Restangular.withConfig(restConfiguration).one('api');
  }
}

export default Api;

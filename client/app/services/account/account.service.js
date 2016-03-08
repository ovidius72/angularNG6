import angular from 'angular';

class AccountService {

  constructor($http, $rootScope, $q, AppConfig) {
    this.$http = $http;
    this.$rootScope = $rootScope;
    this.$q = $q;
    this.apiPath = AppConfig.basePath + AppConfig.api;
  }

  register() {

  }
  
  login(username, password) {

    let deferred = this.$q.defer();
    let credentials = {
      username,
      password
    };

    this.$http.post(this.apiPath + '/')



  }

  logout() {

  }

  requestCredentials() {

  }
}

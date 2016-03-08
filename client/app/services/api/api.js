
class Api {

  constructor($http, AppConfig) {
    this.$http = $http;
    this.apiPath = AppConfig.basePath + AppConfig.api;
    this.message = 'Test stringest';
    console.log(this.apiPath);
  }

  getSettings() {
    console.log("getting settings...");
    this.$http.get(this.apiPath + '/settings').then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

export default Api;

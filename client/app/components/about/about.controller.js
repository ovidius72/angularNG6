class AboutController {

	constructor(api){
    this.ff = 'nnn';
		this.name = 'about';
		this.api = api;
	}

  getSettings() {
    console.log("Clicked!!");
    this.api.getSettings();
  }

}

export default AboutController;

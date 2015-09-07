/// <reference path="randomGenerator.ts" />"
/// <reference path="buttonManager.ts" />"
module simon {
	export class Controller {
		
		private buttonManager: ButtonManager;
		private randomGenerator: RandomGenerator;
		private steps: number;
		private interval: number;
		
		constructor(steps: number){		
			this.buttonManager = new ButtonManager();
			this.randomGenerator = new RandomGenerator(document.getElementsByClassName('color_buttons').length);
			this.steps = steps;
			
			this.interval = setInterval(() => {this.challengePlayer()},1000);
		}
		
		private challengePlayer(): void {
			if(this.steps > 0){
				var number = this.randomGenerator.generate();
				this.buttonManager.highlightButton(<HTMLButtonElement>document.getElementById("button_" + number));
				this.steps--;

				setTimeout(() => {this.buttonManager.disHighlightButton(<HTMLButtonElement>document.getElementById("button_" + number))},500);
			}
			else {
				clearInterval(this.interval);
			}
		}
	}
}
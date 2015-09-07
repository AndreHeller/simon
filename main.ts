///<reference path="controller.ts" />

module simon {
	
	export class Game {
		
		public onsubmit(e: Event){
			e.preventDefault();
			
			var stepsElement = <HTMLInputElement> document.getElementById('steps');
			var controller:Controller = new Controller(parseInt(stepsElement.value));
		}
	}
}

window.onload = () => {
	var gameInstance = new simon.Game(),
		gameForm = document.getElementById('game');
	
	gameForm.addEventListener("submit", (e) => {gameInstance.onsubmit(e);}, false);
}
class Game {
	
	public onsubmit(e: Event){
		e.preventDefault();
		var stepsElement = <HTMLInputElement> document.getElementById('steps');
		
		//Volání další metody nefunguje, protože kontext this je jiný. Po kompilaci zůstane doslovně "this.start(..)"
		this.start(parseInt(stepsElement.value));
		return false;
	}
	
	public start(steps: number){
		alert(steps);
	}
}


window.onload = () => {
	var gameInstance = new Game(),
		gameForm = document.getElementById('game');
	
	gameForm.addEventListener("submit", (e) => {gameInstance.onsubmit(e);}, false);
}
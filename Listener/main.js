var Game = (function () {
    function Game() {
    }
    Game.prototype.onsubmit = function (e) {
        e.preventDefault();
        var stepsElement = document.getElementById('steps');
        //Volání další metody nefunguje, protože kontext this je jiný. Po kompilaci zůstane doslovně "this.start(..)"
        this.start(parseInt(stepsElement.value));
        return false;
    };
    Game.prototype.start = function (steps) {
        alert(steps);
    };
    return Game;
})();
window.onload = function () {
    var gameInstance = new Game(), gameForm = document.getElementById('game');
    gameForm.addEventListener("submit", function (e) { gameInstance.onsubmit(e); }, false);
};

var simon;
(function (simon) {
    var RandomGenerator = (function () {
        function RandomGenerator(maxNumber) {
            this.maxNumber = maxNumber;
        }
        RandomGenerator.prototype.generate = function () {
            return Math.floor(Math.random() * (this.maxNumber - 1 + 1)) + 1;
        };
        return RandomGenerator;
    })();
    simon.RandomGenerator = RandomGenerator;
})(simon || (simon = {}));
var simon;
(function (simon) {
    var ButtonManager = (function () {
        function ButtonManager() {
        }
        ButtonManager.prototype.highlightButton = function (button) {
            button.value = "TADY";
        };
        ButtonManager.prototype.disHighlightButton = function (button) {
            button.value = " ";
        };
        return ButtonManager;
    })();
    simon.ButtonManager = ButtonManager;
})(simon || (simon = {}));
/// <reference path="randomGenerator.ts" />"
/// <reference path="buttonManager.ts" />"
var simon;
(function (simon) {
    var Controller = (function () {
        function Controller(steps) {
            var _this = this;
            this.buttonManager = new simon.ButtonManager();
            this.randomGenerator = new simon.RandomGenerator(document.getElementsByClassName('color_buttons').length);
            this.steps = steps;
            this.interval = setInterval(function () { _this.challengePlayer(); }, 1000);
        }
        Controller.prototype.challengePlayer = function () {
            var _this = this;
            if (this.steps > 0) {
                var number = this.randomGenerator.generate();
                this.buttonManager.highlightButton(document.getElementById("button_" + number));
                this.steps--;
                setTimeout(function () { _this.buttonManager.disHighlightButton(document.getElementById("button_" + number)); }, 500);
            }
            else {
                clearInterval(this.interval);
            }
        };
        return Controller;
    })();
    simon.Controller = Controller;
})(simon || (simon = {}));
///<reference path="controller.ts" />
var simon;
(function (simon) {
    var Game = (function () {
        function Game() {
        }
        Game.prototype.onsubmit = function (e) {
            e.preventDefault();
            var stepsElement = document.getElementById('steps');
            var controller = new simon.Controller(parseInt(stepsElement.value));
        };
        return Game;
    })();
    simon.Game = Game;
})(simon || (simon = {}));
window.onload = function () {
    var gameInstance = new simon.Game(), gameForm = document.getElementById('game');
    gameForm.addEventListener("submit", function (e) { gameInstance.onsubmit(e); }, false);
};

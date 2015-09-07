module simon {
	export class ButtonManager {
		public highlightButton(button: HTMLButtonElement): void {
			button.value = "TADY";
		}
		public disHighlightButton(button: HTMLButtonElement): void {
			button.value = " ";
		}
	}
}
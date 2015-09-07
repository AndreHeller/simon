module simon {
	export class RandomGenerator {
		private maxNumber: number;
		
		constructor(maxNumber: number){
			this.maxNumber = maxNumber;
		}
		
		public generate(): number{
			return Math.floor(Math.random()*(this.maxNumber-1+1))+1;	
		}
	}
}
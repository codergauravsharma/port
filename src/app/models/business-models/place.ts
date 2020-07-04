import { Location } from './location';
import { Quantity } from './quantity';

export class Place {
	public location: Location;
	public temperature(reference?: Date): Quantity {
		throw new Error('method not implemented');
	}
	public distance(reference?: Location): Quantity {
		throw new Error('method not implemented');
	}
}

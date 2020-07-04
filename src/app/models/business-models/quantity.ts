import {
	UnitOfMeasurement,
	kilometer,
	mile,
	celsius,
	fahrenheit,
	kilogram,
	pound,
} from './unit-of-measurement';

export abstract class Quantity {
	public readonly quantity: number;
	public constructor(quantity: number) {
		this.quantity = quantity;
	}

	public abstract get uom(): UnitOfMeasurement;

	public visit<T>(visitor: QuantityVisitor<T>): T {
		return visitor.visit(this);
	}
}

export class Celsius extends Quantity {
	constructor(temperature: number) {
		super(temperature);
	}
	public get uom(): UnitOfMeasurement {
		return celsius;
	}
}

export class Fahrenheit extends Quantity {
	constructor(temperature: number) {
		super(temperature);
	}
	public get uom(): UnitOfMeasurement {
		return fahrenheit;
	}
}

export class Kilometer extends Quantity {
	constructor(distance: number) {
		super(distance);
	}
	public get uom(): UnitOfMeasurement {
		return kilometer;
	}
}

export class Mile extends Quantity {
	constructor(distance: number) {
		super(distance);
	}
	public get uom(): UnitOfMeasurement {
		return mile;
	}
}

export class Kilogram extends Quantity {
	constructor(weight: number) {
		super(weight);
	}
	public get uom(): UnitOfMeasurement {
		return kilogram;
	}
}

export class Pound extends Quantity {
	constructor(weight: number) {
		super(weight);
	}
	public get uom(): UnitOfMeasurement {
		return pound;
	}
}

export abstract class QuantityVisitor<T> {
	abstract visit(subject: Quantity): T;
}

export class CelsiusToFahrenheit extends QuantityVisitor<Quantity> {
	visit(subject: Quantity): Quantity {
		return new Fahrenheit(subject.quantity * (9 / 5) + 32);
	}
}

export class FahrenheitToCelsius extends QuantityVisitor<Quantity> {
	visit(subject: Quantity): Quantity {
		return new Celsius((subject.quantity - 32) * (5 / 9));
	}
}

export class KilometersToMiles extends QuantityVisitor<Quantity> {
	visit(subject: Quantity): Quantity {
		return new Mile(subject.quantity / 1.609);
	}
}

export class MilesToKilometers extends QuantityVisitor<Quantity> {
	visit(subject: Quantity): Quantity {
		return new Kilometer(subject.quantity * 1.609);
	}
}

export class KilogramToPound extends QuantityVisitor<Quantity> {
	visit(subject: Quantity): Quantity {
		return new Pound(subject.quantity * 2.205);
	}
}

export class PoundToKilogram extends QuantityVisitor<Quantity> {
	visit(subject: Quantity): Quantity {
		return new Kilogram(subject.quantity / 2.205);
	}
}

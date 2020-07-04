export interface UnitOfMeasurement {
	name: string;
	fullName: string;
	symbol: string;
}

export const celsius: UnitOfMeasurement = {
	name: 'celsius',
	fullName: 'celsius',
	symbol: '&deg;C',
};

export const fahrenheit: UnitOfMeasurement = {
	name: 'fahrenheit',
	fullName: 'fahrenheit',
	symbol: '&degF',
};

export const kilometer: UnitOfMeasurement = {
	name: 'km',
	fullName: 'kilometer',
	symbol: 'km',
};

export const mile: UnitOfMeasurement = {
	name: 'mi',
	fullName: 'mile',
	symbol: 'mi',
};

export const kilogram: UnitOfMeasurement = {
	name: 'kg',
	fullName: 'kilogram',
	symbol: 'kg',
};

export const pound: UnitOfMeasurement = {
	name: 'pound',
	fullName: 'pound',
	symbol: 'lbs',
};

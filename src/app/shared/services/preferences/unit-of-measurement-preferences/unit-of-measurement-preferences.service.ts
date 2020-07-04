import { Injectable } from '@angular/core';
import {
	UnitOfMeasurement,
	celsius,
	kilometer,
	fahrenheit,
	mile,
	kilogram,
	pound,
} from '@src/app/models/business-models/unit-of-measurement';

@Injectable()
export class UnitOfMeasurementPreferencesService {
	temperature: UnitOfMeasurement;
	distance: UnitOfMeasurement;
	weight: UnitOfMeasurement;
}

export const si: UnitOfMeasurementPreferencesService = {
	temperature: celsius,
	distance: kilometer,
	weight: kilogram,
};

export const english: UnitOfMeasurementPreferencesService = {
	temperature: fahrenheit,
	distance: mile,
	weight: pound,
};

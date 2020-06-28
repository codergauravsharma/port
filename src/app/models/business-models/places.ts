export class Geolocation {
	public Latitude: number;
	public Longitude: number;
}

export class UnitOfMeasurement {
	public Name: string;
	public FullName: string;
	public Symbol: string;
}

export class Weather {
	public Temp: number;
	public UoM: UnitOfMeasurement;
}

export class Distance {
	public Span: number;
	public UoM: UnitOfMeasurement;
}

export class Location {
	public Name: string;
	public Coordinates: Geolocation;
}

export class LocationModel {
	public Location: Location;
	public CurrentWeather: Weather;
	public DistanceFromReferenceLocation: Distance

	constructor(referenceLocation: Location) {
		this.DistanceFromReferenceLocation = (Location == null) ? { Span: 0, UoM: { Name: "KM", FullName: "Kilometers", Symbol: "KM" } } : null;
	}
}
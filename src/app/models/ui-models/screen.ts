import { screen } from '@nativescript/core/platform';
import * as application from '@nativescript/core/application'

export class Screen {
	public widthPixels: number;
	public heightPixels: number;

	public widthDIPs: number;
	public heightDIPs: number;

	public isInPortraitOrientation: boolean;
	public isInLandscapeOrientation: boolean;

	public scale: number;

	constructor() {
		this.isInPortraitOrientation = application.orientation() == "portrait" ? true : false;
		this.isInLandscapeOrientation = !this.isInPortraitOrientation;

		this.widthPixels = (this.isInPortraitOrientation == true ? screen.mainScreen.widthPixels : screen.mainScreen.heightPixels);
		this.heightPixels = (this.isInPortraitOrientation == true ? screen.mainScreen.heightPixels : screen.mainScreen.widthPixels);

		this.widthDIPs = (this.isInPortraitOrientation == true ? screen.mainScreen.widthDIPs : screen.mainScreen.heightDIPs);
		this.heightDIPs = (this.isInPortraitOrientation == true ? screen.mainScreen.heightDIPs : screen.mainScreen.widthDIPs);

		// this.widthPixels = screen.mainScreen.widthPixels;
		// this.heightPixels = screen.mainScreen.heightPixels;

		// this.widthDIPs = screen.mainScreen.widthDIPs;
		// this.heightDIPs = screen.mainScreen.heightDIPs;

		this.scale = screen.mainScreen.scale;
	}
}
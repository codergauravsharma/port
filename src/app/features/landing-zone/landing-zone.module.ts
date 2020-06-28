import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular/common";
import { LandingZoneRoutingModule } from "./landing-zone-routing.module";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		LandingZoneRoutingModule
	],
	declarations: [
		HomeComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class LandingZoneModule { }
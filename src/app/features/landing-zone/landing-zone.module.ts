import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingZoneRoutingModule } from '@src/app/features/landing-zone/landing-zone-routing.module';
import {
	componentDeclarations,
	providerDeclarations,
} from './landing-zone.common';

@NgModule({
	imports: [CommonModule, LandingZoneRoutingModule],
	declarations: componentDeclarations,
	providers: providerDeclarations,
	schemas: [NO_ERRORS_SCHEMA],
})
export class LandingZoneModule { }

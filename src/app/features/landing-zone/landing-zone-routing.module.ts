import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './landing-zone.common';

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LandingZoneRoutingModule {}

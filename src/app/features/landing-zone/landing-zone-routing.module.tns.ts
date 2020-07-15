import { NgModule } from '@angular/core';
// import { NativeScriptRouterModule } from '@nativescript/angular/router';
import { RouterModule } from '@angular/router';
import { routes } from './landing-zone.common';

// @NgModule({
// 	imports: [NativeScriptRouterModule.forChild(routes)],
// 	exports: [NativeScriptRouterModule],
// })
// export class LandingZoneRoutingModule {}

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LandingZoneRoutingModule { }

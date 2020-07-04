import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular/router';
import { AppRoutes } from '@src/app/app.routes';

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(AppRoutes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}

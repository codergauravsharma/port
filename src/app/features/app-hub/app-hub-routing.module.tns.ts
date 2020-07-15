import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular/router';

import { routes } from './app-hub.common';

@NgModule({
	imports: [NativeScriptRouterModule.forChild(routes)],
	exports: [NativeScriptRouterModule]
})
export class AppHubRoutingModule { }

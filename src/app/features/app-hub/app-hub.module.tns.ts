import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { AppHubRoutingModule } from './app-hub-routing.module';
import { componentDeclarations } from './app-hub.common';

@NgModule({
	declarations: [...componentDeclarations],
	imports: [
		NativeScriptCommonModule,
		AppHubRoutingModule
	],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppHubModule { }

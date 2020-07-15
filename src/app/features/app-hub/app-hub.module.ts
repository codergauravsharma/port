import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHubRoutingModule } from './app-hub-routing.module';
import { componentDeclarations } from './app-hub.common';

@NgModule({
	declarations: [...componentDeclarations],
	imports: [
		CommonModule,
		AppHubRoutingModule
	]
})
export class AppHubModule { }

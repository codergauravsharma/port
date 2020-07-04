import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CleanSlateRoutingModule } from './clean-slate-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';

@NgModule({
	declarations: [],
	imports: [CleanSlateRoutingModule, NativeScriptCommonModule],
	schemas: [NO_ERRORS_SCHEMA],
})
export class CleanSlateModule {}

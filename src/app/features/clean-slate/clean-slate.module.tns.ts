import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CleanSlateRoutingModule } from './clean-slate-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';

@NgModule({
	declarations: [],
	imports: [NativeScriptCommonModule, CleanSlateRoutingModule],
	schemas: [NO_ERRORS_SCHEMA],
})
export class CleanSlateModule { }

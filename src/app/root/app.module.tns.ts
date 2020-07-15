import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/root/app-routing.module';
import { AppRootComponent } from '@src/app/root/components/app-root/app-root.component';
import { componentDeclarations, providerDeclarations } from './app.common';

// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';

@NgModule({
	declarations: [...componentDeclarations],
	imports: [NativeScriptModule, AppRoutingModule],
	providers: [...providerDeclarations],
	bootstrap: [AppRootComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }

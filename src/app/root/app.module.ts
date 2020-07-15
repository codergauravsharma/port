import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/root/app-routing.module';
import { AppRootComponent } from '@src/app/root/components/app-root/app-root.component';
import { componentDeclarations, providerDeclarations } from '@src/app/root/app.common';

@NgModule({
	declarations: [...componentDeclarations],
	imports: [BrowserModule, AppRoutingModule],
	providers: [...providerDeclarations],
	bootstrap: [AppRootComponent],
})
export class AppModule { }

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Provider } from '@angular/core';
import { ThemesHandleComponent } from './components/themes-handle/themes-handle.component';

export const componentDeclarations: any[] = [
	HomeComponent,
	ThemesHandleComponent,
];

export const providerDeclarations: Provider[] = [];

export const routes: Routes = [{ path: '', component: HomeComponent }];

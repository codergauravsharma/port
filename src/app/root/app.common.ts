import { Routes } from '@angular/router';
import { Provider } from '@angular/core';
import { AppRootComponent } from './components/app-root/app-root.component';
import { AppHubComponent } from './components/app-hub/app-hub.component';

export const componentDeclarations: any[] = [
	AppRootComponent, AppHubComponent
];

export const providerDeclarations: Provider[] = [];

export const routes: Routes = [
	// Option 1 - README.md
	// { path: '', redirectTo: 'app-hub', pathMatch: 'full' },
	// {
	// 	path: 'app-hub',
	// 	loadChildren: () =>
	// 		import('../features/app-hub/app-hub.module').then(
	// 			(module) => module.AppHubModule
	// 		),
	// }

	// Option 2 - README.md
	// {
	// 	path: '',
	// 	component: AppHubComponent,
	// 	children: [
	// 		{ path: '', redirectTo: 'landing-zone', pathMatch: 'full' },
	// 		{
	// 			path: 'landing-zone',
	// 			loadChildren: () =>
	// 				import('../features/landing-zone/landing-zone.module').then(
	// 					module => module.LandingZoneModule
	// 				)
	// 		}
	// 	]
	// }
];

import { Routes } from '@angular/router';
import { Provider } from '@angular/core';
import { AppHubComponent } from './components/app-hub/app-hub.component';

export const componentDeclarations: any[] = [
	AppHubComponent
];

export const providerDeclarations: Provider[] = [
];

export const routes: Routes = [
	{
		path: '',
		component: AppHubComponent,
		children: [
			{
				path: '',
				redirectTo: 'landing-zone',
				pathMatch: 'full'
			},
			{
				path: 'landing-zone',
				loadChildren: () =>
					import('../landing-zone/landing-zone.module').then(
						module => module.LandingZoneModule
					)
			}
		]
	}
];

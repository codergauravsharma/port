import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
	{ path: "", redirectTo: "/landing-zone", pathMatch: "full" },
	{
		path: "landing-zone",
		loadChildren: () => import("./features/landing-zone/landing-zone.module").then(module => module.LandingZoneModule)
	}
];

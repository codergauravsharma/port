import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '@src/app/app.routes';

@NgModule({
	imports: [RouterModule.forRoot(AppRoutes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

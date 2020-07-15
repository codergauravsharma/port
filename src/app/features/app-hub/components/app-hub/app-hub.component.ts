import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hub',
	templateUrl: './app-hub.component.html',
	styleUrls: ['./app-hub.component.scss']
})
export class AppHubComponent implements OnInit {
	constructor() { }

	ngOnInit(): void {
		console.log('# app-hub | lazy loaded');
	}
}

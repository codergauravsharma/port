import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-hub',
	templateUrl: './app-hub.component.html',
	styleUrls: ['./app-hub.component.scss']
})
export class AppHubComponent implements OnInit {
	constructor(private router: Router) { }

	ngOnInit(): void {
		console.log('# root/components/app-hub loaded');
	}
}

import { Component, OnInit } from '@angular/core';
import { Screen } from '../../../../models/ui-models/screen';
import { EventData } from '@nativescript/core/data/observable';

@Component({
	selector: 'port-home',
	moduleId: module.id,
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	screen: Screen;

	constructor() {
		this.screen = new Screen();
	}

	public ngOnInit(): void {}

	public onLayoutChanged(args: EventData): void {}
}

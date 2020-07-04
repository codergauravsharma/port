import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesHandleComponent } from '@src/app/features/landing-zone/components/themes-handle/themes-handle.component';

describe('ThemesHandleComponent', () => {
	let component: ThemesHandleComponent;
	let fixture: ComponentFixture<ThemesHandleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ThemesHandleComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ThemesHandleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

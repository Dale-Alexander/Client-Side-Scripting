import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePanel } from './welcome-panel';

describe('WelcomePanel', () => {
  let component: WelcomePanel;
  let fixture: ComponentFixture<WelcomePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomePanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBanner } from './gallery-banner';

describe('GalleryBanner', () => {
  let component: GalleryBanner;
  let fixture: ComponentFixture<GalleryBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

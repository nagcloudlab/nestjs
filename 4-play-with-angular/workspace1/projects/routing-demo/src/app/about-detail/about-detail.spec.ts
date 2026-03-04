import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDetail } from './about-detail';

describe('AboutDetail', () => {
  let component: AboutDetail;
  let fixture: ComponentFixture<AboutDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

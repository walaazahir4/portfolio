import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCert } from './my-cert';

describe('MyCert', () => {
  let component: MyCert;
  let fixture: ComponentFixture<MyCert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProj } from './mini-proj';

describe('MiniProj', () => {
  let component: MiniProj;
  let fixture: ComponentFixture<MiniProj>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniProj]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniProj);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

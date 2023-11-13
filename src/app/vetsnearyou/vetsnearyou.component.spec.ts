import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetsnearyouComponent } from './vetsnearyou.component';

describe('VetsnearyouComponent', () => {
  let component: VetsnearyouComponent;
  let fixture: ComponentFixture<VetsnearyouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetsnearyouComponent]
    });
    fixture = TestBed.createComponent(VetsnearyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

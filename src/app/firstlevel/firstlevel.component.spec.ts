import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstlevelComponent } from './firstlevel.component';

describe('FirstlevelComponent', () => {
  let component: FirstlevelComponent;
  let fixture: ComponentFixture<FirstlevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstlevelComponent]
    });
    fixture = TestBed.createComponent(FirstlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

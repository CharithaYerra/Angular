import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdLevelComponent } from './third-level.component';

describe('ThirdLevelComponent', () => {
  let component: ThirdLevelComponent;
  let fixture: ComponentFixture<ThirdLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdLevelComponent]
    });
    fixture = TestBed.createComponent(ThirdLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

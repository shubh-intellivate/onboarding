import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatoryTrainingsComponent } from './mandatory-trainings.component';

describe('MandatoryTrainingsComponent', () => {
  let component: MandatoryTrainingsComponent;
  let fixture: ComponentFixture<MandatoryTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandatoryTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandatoryTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

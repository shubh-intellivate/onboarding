import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOfValuesComponent } from './code-of-values.component';

describe('CodeOfValuesComponent', () => {
  let component: CodeOfValuesComponent;
  let fixture: ComponentFixture<CodeOfValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeOfValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeOfValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesWalkthroughComponent } from './policies-walkthrough.component';

describe('PoliciesWalkthroughComponent', () => {
  let component: PoliciesWalkthroughComponent;
  let fixture: ComponentFixture<PoliciesWalkthroughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliciesWalkthroughComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesWalkthroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

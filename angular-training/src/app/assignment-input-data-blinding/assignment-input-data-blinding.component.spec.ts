import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentInputDataBlindingComponent } from './assignment-input-data-blinding.component';

describe('AssignmentInputDataBlindingComponent', () => {
  let component: AssignmentInputDataBlindingComponent;
  let fixture: ComponentFixture<AssignmentInputDataBlindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentInputDataBlindingComponent]
    });
    fixture = TestBed.createComponent(AssignmentInputDataBlindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

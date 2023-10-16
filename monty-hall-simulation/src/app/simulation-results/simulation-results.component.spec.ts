import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationResultsComponent } from './simulation-results.component';

describe('SimulationResultsComponent', () => {
  let component: SimulationResultsComponent;
  let fixture: ComponentFixture<SimulationResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationResultsComponent]
    });
    fixture = TestBed.createComponent(SimulationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

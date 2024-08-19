import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostProjectComponent } from './cost-project.component';

describe('CostProjectComponent', () => {
  let component: CostProjectComponent;
  let fixture: ComponentFixture<CostProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeastExpensiveProjectComponent } from './least-expensive-project.component';

describe('LeastExpensiveProjectComponent', () => {
  let component: LeastExpensiveProjectComponent;
  let fixture: ComponentFixture<LeastExpensiveProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeastExpensiveProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeastExpensiveProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

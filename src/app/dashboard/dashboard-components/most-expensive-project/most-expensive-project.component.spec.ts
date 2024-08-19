import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostExpensiveProjectComponent } from './most-expensive-project.component';

describe('MostExpensiveProjectComponent', () => {
  let component: MostExpensiveProjectComponent;
  let fixture: ComponentFixture<MostExpensiveProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostExpensiveProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostExpensiveProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

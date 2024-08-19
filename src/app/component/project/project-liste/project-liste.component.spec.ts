import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListeComponent } from './project-liste.component';

describe('ProjectListeComponent', () => {
  let component: ProjectListeComponent;
  let fixture: ComponentFixture<ProjectListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

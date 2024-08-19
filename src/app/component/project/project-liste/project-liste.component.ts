import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Project } from '../../../project';

@Component({
  selector: 'app-project-liste',
  templateUrl: './project-liste.component.html',
  styleUrls: ['./project-liste.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class ProjectListeComponent implements OnInit {
  form: FormGroup;
  isEditMode = false;
  isViewMode = false;
  isAddMode = false;
  categories = [
    { id: 1, name: 'Catégorie 1' },
    { id: 2, name: 'Catégorie 2' },
  ];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProjectListeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'view' | 'edit' | 'add', project: Project | null }
  ) {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      frais: ['', Validators.required],
      categorieId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.isEditMode = this.data.mode === 'edit';
    this.isViewMode = this.data.mode === 'view';
    this.isAddMode = this.data.mode === 'add';

    if (this.data.project) {
      this.form.patchValue(this.data.project);
    }

    if (this.isViewMode) {
      this.form.disable();
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close({ action: this.data.mode, project: this.form.value });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Inconnu';
  }
}

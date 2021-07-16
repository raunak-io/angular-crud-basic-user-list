import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  exports: [
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatTableModule,
  ],
})
export class AngularMaterialModule {}

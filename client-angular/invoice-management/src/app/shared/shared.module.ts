import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispayPdfComponent } from './components/dispay-pdf/dispay-pdf.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SafeUrlPipe } from './pipies/safe-url-pipe';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { DispayPdfService } from './components/dispay-pdf/dispay-pdf.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    DispayPdfComponent,
    SafeUrlPipe
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonToggleModule,
  ],
  exports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    SafeUrlPipe,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    DispayPdfComponent,
    HttpClientModule,
    MatButtonToggleModule
  ],
  providers: [DispayPdfService]
})
export class SharedModule { }

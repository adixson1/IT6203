import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { SicknessDiseaseInfoComponent } from './sickness-disease-info/sickness-disease-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientInfoComponent,
    AppointmentComponent,
    DoctorInfoComponent,
    SicknessDiseaseInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

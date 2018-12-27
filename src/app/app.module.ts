import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { AddMahasiswaComponent } from './add-mahasiswa/add-mahasiswa.component';
import { UpdateMahasiswaComponent } from './update-mahasiswa/update-mahasiswa.component';

@NgModule({

  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    StudentsComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    NavbarComponent,
    StudentsComponent,
    StudentDetailComponent,
    StudentSearchComponent,
    AddMahasiswaComponent,
    UpdateMahasiswaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // for root berlaku untuk semua komponen di angular
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
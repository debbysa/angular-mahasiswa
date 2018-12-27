import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsComponent } from './students/students.component';
import { UpdateMahasiswaComponent } from './update-mahasiswa/update-mahasiswa.component';

// import { HeroesComponent }      from './heroes/heroes.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'detail/:id', component: StudentDetailComponent },
  { path: 'update/:id', component: UpdateMahasiswaComponent },
  { path: 'students', component: StudentsComponent }
];

@NgModule({
  //import dulu baru export
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
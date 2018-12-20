import { Component, OnInit, Input } from '@angular/core';
// import { Hero } from '../hero';
// import { HeroService } from '../hero.service';

import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  students: Student[] = [];

  page: number = 2; //the current page
  itemsPerPage: number = 10;
  totalItems: number = 20;

  // @Input() count: number;
  // @Input() perPage: number;
  // @Input() pageToShow: number;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
    // this.getStudents2();
  }

  loadPage(page: number) {
    this.loadData();
  }

  loadData() {
    if (this.page) {
      this.studentService.getStudents()
        .subscribe(students => this.students = students.slice(10, 20));
    }
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students.slice(0, 10));
  }

  getStudents2(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students.slice(10, 20));
  }
}
import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from '../student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  //single objek
  @Input() student: Student; //komunikasi antara Student dan student-detail

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location //untuk mendapatkan id di dashboard/id
  ) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.studentService.updateStudent(this.student)
      .subscribe(() => this.goBack());
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Student } from '../student'; //import nama class Student diluar folder
import { StudentService } from '../student.service';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
  // styleUrls: ['./students.component.css'],
})

export class StudentsComponent implements OnInit {
  closeResult: string;

  students: Student[];
  selectedStudent: Student;

  form = new FormGroup({
    gender: new FormControl(Validators.required),
  });

  constructor(private studentService: StudentService,
    private modalService: NgbModal) {
    // this.form = fb.group({
    //   gender: ['', Validators.required]
    // });
  }


  ngOnInit() {
    this.getStudents();
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  getStudents(): void {
    //asynchronus
    this.studentService.getStudents()
      .subscribe(students => this.students = students); //observable nya students
    //harus dimasukkan dalam properti students di file ini
  }

  add(name: string, nim: number, alamat: string, jurusan: string, prodi: string, father: string, mother: string)
    : void {
    name = name.trim();
    alamat = alamat.trim();
    jurusan = jurusan.trim();
    prodi = prodi.trim();
    father = father.trim();
    mother = mother.trim();

    if (!name) {
      return;
    } //jika value trim kosongan, maka langsung di return
    // else if (!alamat) {
    //   return;
    // }
    // else if (!jurusan) {
    //   return;
    // }
    // else if (!prodi) {
    //   return;
    // }

    this.studentService.addStudent({ name, nim, alamat, jurusan, prodi } as Student) // jika tidak kosong, maka masuk perintah ini
      .subscribe(student => {
        this.students.push(student);
      });

  }

  onChange(event: any) {
    console.log(event.target.value)
    this.selectedStudent = event.target.value
  }


  delete(student: Student): void {
    this.students = this.students.filter(h => h !== student);
    this.studentService.deleteStudent(student).subscribe();
  }


}

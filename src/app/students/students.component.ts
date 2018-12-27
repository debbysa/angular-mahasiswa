import { Component, OnInit } from '@angular/core';

import { Student } from '../student'; //import nama class Student diluar folder
import { StudentService } from '../student.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html'
  // styleUrls: ['./students.component.css'],
})

export class StudentsComponent implements OnInit {

  students: Student[];
  value = [];
  selectedStudent: Student;
  closeResult: string;

  constructor(private modalService: NgbModal, private studentService: StudentService) { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    //asynchronus
    this.studentService.getStudents()
      .subscribe(students => this.students = students); //observable nya students
    //harus dimasukkan dalam properti students di file ini
  }

  add(id: number, name: string, nim: number, alamat: string, jurusan: string, prodi: string, father: string, mother: string)
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

    this.value.push({
      id,
      name,
      nim,
      alamat,
      jurusan,
      prodi,
      father,
      mother,
    });

    this.studentService.addStudent({
      id,
      name,
      nim,
      alamat,
      jurusan,
      prodi
    } as Student) // jika tidak kosong, maka masuk perintah ini
      .subscribe(student => {
        this.students.push(student);
      });

  }

  delete(student: Student): void {
    this.students = this.students.filter(h => h !== student);
    this.studentService.deleteStudent(student).subscribe();
  }


}

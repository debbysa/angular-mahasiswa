import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-mahasiswa',
  templateUrl: './add-mahasiswa.component.html',
  styleUrls: ['./add-mahasiswa.component.css']
})
export class AddMahasiswaComponent implements OnInit {
  selectedStudent: Student;


  form = new FormGroup({
    gender: new FormControl(Validators.required),
  });

  constructor() {
  }

  ngOnInit() {
  }

  onChange(event: any) {
    console.log(event.target.value)
    this.selectedStudent = event.target.value
  }

}

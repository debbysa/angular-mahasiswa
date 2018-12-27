import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Hero } from './hero';
import { Student } from './student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  //ketika aplikasi jalan, database langsung ke ke create. tidak di inject dulu
  //pura pura punya database sendiri
  createDb() {
    //no sql bentuknya object
    const students = [
      {
        id: 11,
        name: 'Denathan',
        nim: 17317100,
        jnsKelamin: 'L',
        alamat: 'canada',
        namaBapak: "james",
        namaIbu: "rona",
        jurusan: "teknologi informasi",
        prodi: "manajemen informatika",
        IPK: 3.7
      },
      {
        id: 12,
        name: 'Abdillah',
        nim: 17317101,
        jnsKelamin: 'L',
        alamat: 'canberra',
        namaBapak: "john",
        namaIbu: "michelle",
        jurusan: "teknologi informasi",
        prodi: "manajemen informatika",
        IPK: 3.4
      },
      {
        id: 13,
        name: 'Luna',
        nim: 17317102,
        jnsKelamin: 'L',
        alamat: 'new york',
        namaBapak: "jonathan",
        namaIbu: "lucy",
        jurusan: "teknologi informasi",
        prodi: "manajemen informatika",
        IPK: 3.5
      },
      {
        id: 14,
        name: 'Helena',
        nim: 17317103,
        jnsKelamin: 'P',
        alamat: 'swiss',
        namaBapak: "ronald",
        namaIbu: "natalie",
        jurusan: "teknologi informasi",
        prodi: "manajemen informatika",
        IPK: 3.65
      },
      {
        id: 15,
        name: 'Mareta',
        nim: 17317104,
        jnsKelamin: 'P',
        alamat: 'hanoi',
        namaBapak: "arthur",
        namaIbu: "cathelin",
        jurusan: "teknologi informasi",
        prodi: "teknik informatika",
        IPK: 3.63
      },
      {
        id: 16,
        name: 'peter',
        nim: 17317105,
        jnsKelamin: 'L',
        alamat: 'amsterdam',
        namaBapak: "bill",
        namaIbu: "soraya",
        jurusan: "teknologi informasi",
        prodi: "teknik informatika",
        IPK: 3.58
      },
      {
        id: 17,
        name: 'Alissya',
        nim: 17317106,
        jnsKelamin: 'L',
        alamat: 'tokyo',
        namaBapak: "kiyoshi",
        namaIbu: "izuna",
        jurusan: "teknologi informasi",
        prodi: "teknik informatika",
        IPK: 3.8
      },
      {
        id: 18,
        name: 'Devanda',
        nim: 17317107,
        jnsKelamin: 'L',
        alamat: 'turki',
        namaBapak: "mahmud",
        namaIbu: "maimunah",
        jurusan: "teknologi informasi",
        prodi: "teknik informatika",
        IPK: 3.77
      },
      {
        id: 19,
        name: 'Mariska',
        nim: 17317108,
        jnsKelamin: 'L',
        alamat: 'canada',
        namaBapak: "tom",
        namaIbu: "siska",
        jurusan: "teknologi informasi",
        prodi: "manajemen informatika",
        IPK: 3.59
      },
      {
        id: 20,
        name: 'Tobi',
        nim: 17317109,
        jnsKelamin: 'L',
        alamat: 'new york',
        namaBapak: "jack",
        namaIbu: "luna",
        jurusan: "teknologi informasi",
        prodi: "teknik informatika",
        IPK: 3.5
      },
      {
        id: 21,
        name: 'Chalk',
        nim: 17317110,
        jnsKelamin: 'L',
        alamat: 'new york',
        namaBapak: "julian",
        namaIbu: "yuki",
        jurusan: "teknologi informasi",
        prodi: "teknik informatika",
        IPK: 3.67
      },
      {
        id: 22,
        name: 'Erika',
        nim: 17317111,
        jnsKelamin: 'P',
        alamat: 'Jerman',
        namaBapak: "Gerry",
        namaIbu: "Cindy",
        jurusan: "teknologi informasi",
        prodi: "teknik informatika",
        IPK: 3.8
      },
      {
        id: 23,
        name: 'Kelvino',
        nim: 17317112,
        jnsKelamin: 'L',
        alamat: 'Paris',
        namaBapak: "James",
        namaIbu: "Nicky",
        jurusan: "teknologi informasi",
        prodi: "teknik informatika",
        IPK: 3.77
      },
      {
        id: 24,
        name: 'Angela',
        nim: 17317113,
        jnsKelamin: 'P',
        alamat: 'Amsterdam',
        namaBapak: "Johan",
        namaIbu: "Marie",
        jurusan: "teknologi informasi",
        prodi: "manajemen informatika",
        IPK: 3.82
      },
      {
        id: 25,
        name: 'Robert',
        nim: 17317114,
        jnsKelamin: 'L',
        alamat: 'Amsterdam',
        namaBapak: "Johannes",
        namaIbu: "Ceith",
        jurusan: "teknologi informasi",
        prodi: "manajemen informatika",
        IPK: 3.81
      },
      {
        id: 26,
        name: 'Kim',
        nim: 17317115,
        jnsKelamin: 'L',
        alamat: 'Seoul',
        namaBapak: "Park",
        namaIbu: "So Hyun",
        jurusan: "teknologi informasi",
        prodi: "manajemen informatika",
        IPK: 3.87
      },
      {
        id: 27,
        name: 'Alissa',
        nim: 17317116,
        jnsKelamin: 'P',
        alamat: 'Amsterdam',
        namaBapak: "Johannes",
        namaIbu: "Ceith",
        jurusan: "teknologi informasi",
        prodi: "manajemen informatika",
        IPK: 3.84
      },
      {
        id: 28,
        name: 'Nicholas',
        nim: 17317117,
        jnsKelamin: 'L',
        alamat: 'Amsterdam',
        namaBapak: "Thomy",
        namaIbu: "Serena",
        jurusan: "teknologi informasi",
        prodi: "manajemen informatika",
        IPK: 3.69
      },
      {
        id: 29,
        name: 'Jung',
        nim: 17317118,
        jnsKelamin: 'L',
        alamat: 'Amsterdam',
        namaBapak: "Kyuhyun",
        namaIbu: "Mona",
        jurusan: "teknologi informasi",
        prodi: "manajemen informatika",
        IPK: 3.77
      },
      {
        id: 30,
        name: 'Natalia',
        nim: 17317119,
        jnsKelamin: 'P',
        alamat: 'Amsterdam',
        namaBapak: "Johannes",
        namaIbu: "Kelly",
        jurusan: "teknologi informasi",
        prodi: "manajemen informatika",
        IPK: 3.86
      }
    ];
    return { students };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 11;
  }
}
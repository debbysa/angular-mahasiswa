import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMahasiswaComponent } from './update-mahasiswa.component';

describe('UpdateMahasiswaComponent', () => {
  let component: UpdateMahasiswaComponent;
  let fixture: ComponentFixture<UpdateMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

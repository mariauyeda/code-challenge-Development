import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sharp Code Challenge';
  familyPracticeDoctors: Doctor[] = [];
  pediatricDoctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctorService.getDoctors()
      .subscribe(doctors => {
        this.familyPracticeDoctors = this.processDoctorArray(doctors, 'FamilyPractice');
        this.pediatricDoctors = this.processDoctorArray(doctors, 'Pediatrics');
      });
  }

  processDoctorArray(doctors, practiceType: string): Doctor[] {
    console.log(doctors);

    let doctorList = doctors.filter(doctor => 
      doctor.specialty == practiceType
    )

   return doctorList.sort((a, b) => (a.reviewCount < b.reviewCount) ? 1 : -1)
  }
}

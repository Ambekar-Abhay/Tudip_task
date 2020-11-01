import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeDetails: Object;

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.getEmployeeDetails()
  }
getEmployeeDetails(){
  this.apiservice.getEmployee().subscribe(resp=>{
    if(resp){
      this.employeeDetails=resp
    }
  },error=>{
    alert(error.error)
  })
}
}

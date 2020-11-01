import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getEmployee(){
    const path='http://dummy.restapiexample.com/api/v1/employees'
    this.http.get(path)
  }
}

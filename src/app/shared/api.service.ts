import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getEmployee(){
    const path='http://fakerestapi.azurewebsites.net/api/Books'
    return this.http.get(path)
  }
}

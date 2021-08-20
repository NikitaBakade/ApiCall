import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  
  constructor(private http:HttpClient) { }
  jsonApi = "https://jsonplaceholder.typicode.com/todos"

  getJsonData(){
    return this.http.get(this.jsonApi)
  }
}

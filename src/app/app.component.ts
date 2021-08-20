import { Component, OnInit } from '@angular/core';
import { ApicallService } from './apicall.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  title = 'apicall';
  apiResponse;
  query : string = '';
  startIndex = 0;
  endIndex = 10;
  order: any;
  isDesc: boolean = false;
  reverse1;
  predicate1;
  keys0: any;
  keys1: any;
  keys2: any;
  keys3: any;
  
  constructor(private api:ApicallService){}

  ngOnInit(): void {
    let keyValue;
    this.api.getJsonData().subscribe(
      (response)=>{
        this.apiResponse = response
        console.log("apiResponse",this.apiResponse);
        this.apiResponse.forEach((element) => {
          // console.log(Object.keys(element));
          keyValue = Object.keys(element);
        });
        this.keys0 = keyValue[0];
        this.keys1 = keyValue[1];
        this.keys2 = keyValue[2];
        this.keys3 = keyValue[3];
      });
  }

  getArrayFromNumber(length){
    return new Array(Math.ceil(length/10));
  }

  updateIndex(pageIndex){
    this.startIndex = pageIndex * 10;
    this.endIndex = this.startIndex + 10;
  }

    sort(property) {
      if(property==="id" || property==="completed" || property==="userId" || property==="title"){
        this.isDesc = !this.isDesc;
        let direction = this.isDesc ? 1:-1;
        this.apiResponse.sort(function(a, b){
        if(a[property]<b[property]){
          return -1 * direction;
        }
        else if(a[property]>b[property]){
          return 1 * direction;
        }
        else{
          return 0;
        }
      })
    }
  }
}
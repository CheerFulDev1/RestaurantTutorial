import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = "http://localhost:3000/restaurants";
  rootUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(this.url);
  }

  saveResto(data: any){
    return this.http.post(this.url, data);
  }

  deletResto(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentResto(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

  updateResto(id: number, data: any){
    return this.http.put(`${this.url}/${id}`, data);
  }

  registerUsers(data: any){
    return this.http.post(this.rootUrl+"users", data);
  }


}

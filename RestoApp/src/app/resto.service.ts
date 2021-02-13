import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = "http://localhost:3000/restaurants";
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
}

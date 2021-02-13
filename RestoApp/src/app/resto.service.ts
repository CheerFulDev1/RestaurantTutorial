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
}

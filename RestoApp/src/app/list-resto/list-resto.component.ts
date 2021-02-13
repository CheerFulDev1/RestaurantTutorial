import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto: RestoService) {}
  collection: any = {};
  ngOnInit(): void {
    this.resto.getData().subscribe((result)=>{
      console.warn(result);
      this.collection = result;
    })
  }

  deletTheResto(id: number){
    this.collection.splice(id-1, 1);
    this.resto.deletResto(id).subscribe((result)=>{
      console.warn("Deleted", result);
    })
  }

}

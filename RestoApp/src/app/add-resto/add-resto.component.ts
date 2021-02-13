import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alert: boolean= false;
  addResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }

  collectResto(){
    this.resto.saveResto(this.addResto.value).subscribe((result)=>{
      console.warn("Collect Resto", result)
    });
    this.alert = true;

    this.addResto.reset({});
  }

  closeAlert(){
    this.alert = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  alertupdate: boolean = false;
  editResto = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  });
  
  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result: any)=>{
      this.editResto = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email'])
      });
    })
  }

  closeAlertUpdate(){
    this.alertupdate = false;
  }

  updateTheResto(){
    this.resto.updateResto(this.router.snapshot.params.id, this.editResto.value).subscribe((result)=>{
      console.warn("updated", result)
    });
    this.alertupdate = true;
  }



}

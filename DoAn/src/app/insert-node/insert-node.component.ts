import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ItemDescription } from '../models/Item';
import { ItemsService } from '../services/items.service';

export class ItemDescription {
  id: string = "";
  fname: string = "";
  lname: string = "";
  sex: string = "";
  starDate: string = "";
  experience: string = "";
  description: string = "";
  avatar: string = "";
}

@Component({
  selector: 'app-insert-node',
  templateUrl: './insert-node.component.html',
  styleUrls: ['./insert-node.component.css']
})
export class InsertNodeComponent implements OnInit {
  insertFrm: FormGroup;
  nhanvienCollection: any;
  constructor(private fb: FormBuilder, private itemSrv: ItemsService) {
    this.insertFrm = this.fb.group({
      id: ['', [Validators.required, Validators.maxLength(8)]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      starDate: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      description: [''],
      avatar: ['']
    });

  }

  ngOnInit(): void {

  }

  onSubmit() {
    let item = new ItemDescription();
    item.id = this.insertFrm.controls["id"].value;
    item.fname = this.insertFrm.controls.fname.value;
    item.lname = this.insertFrm.controls.lname.value;
    item.sex = this.insertFrm.controls.sex.value;
    item.starDate = this.insertFrm.controls.starDate.value;
    item.experience = this.insertFrm.controls.experience.value;
    item.description = this.insertFrm.controls.description.value;
    item.avatar = this.insertFrm.controls.avatar.value;
    this.itemSrv.insertItem(item).subscribe(data => console.log(data))
    console.log("id", item.id);
    console.log("F name", item.fname);
    console.log("L name", item.lname);
  }
}
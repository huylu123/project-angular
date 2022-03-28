import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ItemsService } from '../services/items.service';
import { ItemDescription } from '../models/Item';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-add-item-list',
  templateUrl: './add-item-list.component.html',
  styleUrls: ['./add-item-list.component.css']
})
export class AddItemListComponent implements OnInit {
  private nhanvienCollection: AngularFirestoreCollection<ItemDescription>;
  // items: Observable<ItemDescription[]>;
  items1: ItemDescription[] = []
  marked = false;
  theCheckbox = 'hello';
  isChecked: any;

  //insertFrm: FormGroup;
  constructor(private readonly afs: AngularFirestore, 
    private fb: FormBuilder, 
    private itemSrv: ItemsService,
    private router: Router, ) {
    this.nhanvienCollection = afs.collection<ItemDescription>('items1');
    // this.items = this.nhanvienCollection.valueChanges({ idField: 'key' });
    // this.formaddItemList = this.fb.group({
    //   id: ['', [Validators.required, Validators.maxLength(8)]],
    //   fname: ['', [Validators.required]],
    //   lname: ['', [Validators.required]],
    //   sex: ['', [Validators.required]],
    //   starDate: ['', [Validators.required]],
    //   experience: ['', [Validators.required]],
    //   description: [''],
    //   avatar: [''],
    //   status: ['']
    // });
  }

  formaddItemList!: FormGroup;
  ngOnInit(): void {
    this.formaddItemList = new FormGroup({
      //id: new FormControl(),
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      sex: new FormControl(),
      starDate: new FormControl('', [Validators.required]),
      experience: new FormControl('', [Validators.required]),
      description: new FormControl(),
      avatar: new FormControl(),
      status: new FormControl(),
    })
  }

  add(data: {
    id: string;
    fname: string;
    lname: string;
    sex: string;
    starDate: string;
    experience: string;
    description: string;
    avatar: string;
    status: string;
  }) {
    let it: ItemDescription = {};
    //it.id = data.id
    it.fname = data.fname
    it.lname = data.lname
    it.sex = data.sex
    it.starDate = data.starDate
    it.experience = data.experience
    it.description = data.description
    const avatar = data.avatar
    it.status = data.status

    let docid = "id1";
    // tạo docid bằng AngularFirestore
    console.log(it);
    if (data.fname === null || data.lname === null
       || data.starDate === null || data.experience === null
     ) {
      alert('Thêm thất bại vui lòng kiểm tra lại ...!!!');
    }
    else {
      this.nhanvienCollection.add(it);///thêm với docid tự động tạo
      //this.nhanvienCollection.doc(docid).set(Object.assign({}, it));
      alert('Thêm thành công ...!!!');
    this.router.navigate(["/admin"]);

    }

    //this.nhanvienCollection.doc(docid).set(Object.assign({}, it));//Object.assign({} khong co lenh nay thi se khong them vao firebase duoc
  }

  back(){
    this.router.navigate(["/admin"]);
    // location.href = "/item-list"
  }

  myFunction(ev:any){
    console.log(ev.target.defaultValue);
  
  }
  toggleVisibility(e:any){
    
  }

  click(ev:any){
    
 }
}




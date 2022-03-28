import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemDescription } from '../models/Item';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<ItemDescription>;
  // items: Observable<ItemDescription[]>;
  config: any;
  items1: ItemDescription[] = []
  searchName!: string;
  formsearch!: FormGroup;
  search!: FormControl;
  editState: boolean = false;
  nhanvienToEdit!: ItemDescription;
  marked = false;
  constructor(private readonly afs: AngularFirestore, private userService: UserService,
    private router: Router) {
    this.itemsCollection = afs.collection<ItemDescription>('items1');//lấy dữ liệu
    // this.items = this.itemsCollection.valueChanges({ idField: 'key' });
    // this.items.subscribe(data => {
    //   this.items1 = data;
    //   this.config = {
    //     itemsPerPage: 2,
    //     currentPage: 1,
    //     totalItems: this.items1.length
    //   };
    // })
    // this.add("3", "linh")
    // this.update("3", "33", "3 update")
    // this.delete("3", "33", "3 update")
  }
  pageChanged(event: number) {
    this.config.currentPage = event;
  }


  formupdate!: FormGroup;
  ngOnInit(): void {
    this.userService.getNhanVien().subscribe((items1: ItemDescription[]) => {
      this.items1 = items1
      this.formupdate = new FormGroup({
        id: new FormControl(),
        fname: new FormControl(),
        lname: new FormControl(),
        sex: new FormControl(),
        starDate: new FormControl(),
        experience: new FormControl(),
        description: new FormControl(),
        avatar: new FormControl(),
      })
    })
    this.formsearch = new FormGroup({
      search: new FormControl(),

    })

  }

  inputNull() {
    if (this.searchName == "") {
      this.ngOnInit();
    }
  }
  Search() {
    console.log(this.searchName);

    if (this.searchName == "") {//Khong co du thi tra ve table mac dinh
      this.ngOnInit();
    }
    else {
      this.items1 = this.items1.filter(res => {
        return res.fname?.toLocaleLowerCase().match(this.searchName.toLocaleLowerCase()); 
        //so sanh du lieu tren mang vs du liêu nhap vao: kieu chu thuong
      })
    }
  }

  // update(docid: string, id: string, name: string) {
  //   let it: Item = {};
  //   it.id = id;
  //   it.name = name;
  //   this.itemsCollection.doc(docid).update(it)
  // }
  update(data: {
    id: string;
    fname: string;
    lname: string;
    sex: string;
    starDate: string;
    experience: string;
    description: string;
    avatar: string;
    status: boolean;
    items1: any
  }) {
    let it: ItemDescription = {};
    it.id = data.id
    it.fname = data.fname
    it.lname = data.lname
    it.sex = data.sex
    it.starDate = data.starDate
    it.experience = data.experience
    it.description = data.description

    // let docid = "id1";
    // tạo docid bằng AngularFirestore
    // console.log(it);
    const id = this.afs.createId();

    this.itemsCollection.doc(id).update(it);//thêm với docid tự động tạo
    this.clearState()
    alert("Success")
    //them vao itemsCollection với docid cụ thể

    // this.nhanvienCollection.doc(docid).set(Object.assign({}, it));//Object.assign({} khong co lenh nay thi se khong them vao firebase duoc
  }
  // delete(docid: string, id: string, name: string) {
  //   let it: Item = {};
  //   it.id = id;
  //   it.name = name;
  //   this.itemsCollection.doc("3").delete()
  // }
  delete(event: any, items1: ItemDescription) {
    this.userService.deleteNhanVien(items1);
    // this.itemsCollection.doc().delete()
    // this.itemsCollection.doc(items1.id).delete();
    alert('Xoá Nhân Viên Thành Công');
  }
  edit(nhanvien: ItemDescription) {
    this.editState = true;
    this.nhanvienToEdit = nhanvien;
  }
  clearState() {
    this.editState = false;
  }

  back(){
    this.clearState()
    this.router.navigate(["/admin"]);
  }


  add(){
    this.router.navigate(["/admin/add-item-list"]);
    // location.href = "/admin/add-item-list"
  }





  // add(id: string, name: string) {
  //   let it: Item = {};
  //   it.id = id;
  //   it.name = name;
  //   let docid = "3";
  //   this.itemsCollection.doc(docid).set(Object.assign({}, it));
  // }




}

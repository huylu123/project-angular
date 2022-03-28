import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ItemDescription } from '../models/Item';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  itemsCollection: AngularFirestoreCollection<ItemDescription>;
  items: Observable<ItemDescription[]>;
  constructor(public afs: AngularFirestore, private afAuth: AngularFireAuth) {

    this.itemsCollection = this.afs.collection('items1')
    this.items = this.itemsCollection.snapshotChanges().pipe(map((changes: any[]) => {
      return changes.map(a => {
        const data = a.payload.doc.data() as ItemDescription;
        data.id = a.payload.doc.id;
        return data;
      })
    }))

  }

  getNhanVien(): Observable<ItemDescription[]> {
    return this.items;

  }
  deleteNhanVien(nhanvien: ItemDescription) {
    this.itemsCollection.doc(nhanvien.id).delete();
  }
  updateNhanVien(nhanvien: ItemDescription) {
    this.itemsCollection.doc(nhanvien.id).update(nhanvien);
  }
  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      var user = this.afAuth.onAuthStateChanged(function (user) {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }
}

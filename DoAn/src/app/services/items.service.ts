import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item, ItemDescription } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:8000/api/items/');
  }
  insertItem(item: ItemDescription): Observable<ItemDescription> {
    //	const headers = { 'content-type': 'application/json'} 
    //	console.log(JSON.stringify(item))						
    return this.http.post<ItemDescription>('http://localhost:8000/api/insert/',
      item);
  }
}

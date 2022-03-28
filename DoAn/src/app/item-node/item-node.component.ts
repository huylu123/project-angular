import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemDescription } from '../models/Item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-node',
  templateUrl: './item-node.component.html',
  styleUrls: ['./item-node.component.css']
})
export class ItemNodeComponent implements OnInit {
  items!: Observable<ItemDescription[]>;

  nhanvienlist: ItemDescription[] = [];
  constructor(itemsrv: ItemsService) {
    // this.items = itemsrv.getItems()
  }

  ngOnInit(): void {
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNodeComponent } from './item-node.component';

describe('ItemNodeComponent', () => {
  let component: ItemNodeComponent;
  let fixture: ComponentFixture<ItemNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

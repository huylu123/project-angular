import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemListComponent } from './add-item-list/add-item-list.component';
import { ContainerComponent } from './container/container.component';
import { AuthGuard } from './guard/auth.guard';
import { InsertNodeComponent } from './insert-node/insert-node.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemNodeComponent } from './item-node/item-node.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';


const routes: Routes = [


  // { path: "", component: LoginComponent },
  // { path: "item-list", component: ItemListComponent },
  // { path: 'add-item-list', component: AddItemListComponent },
  // { path: "insert", component: InsertNodeComponent },

  {path:'admin', component:MainLayoutComponent,canActivate:[AuthGuard],     
  children:[
    {path:"", component:ItemListComponent},                 
    {path:'add-item-list', component:AddItemListComponent},
  ]
},
{path : 'register', component: RegisterComponent},
{path:'**', component:LoginComponent},
{path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

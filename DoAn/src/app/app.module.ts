import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ItemListComponent } from './item-list/item-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ItemNodeComponent } from './item-node/item-node.component';
// import { LoginComponent } from './login/login.component';
import { InsertNodeComponent } from './insert-node/insert-node.component';
import { AddItemListComponent } from './add-item-list/add-item-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DemoComponent } from './demo/demo.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';



// import { AuthService } from './register/service/auth.service';
// import { SharingService } from './register/service/sharing.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavComponent,
    ContainerComponent,
    FooterComponent,
    ItemListComponent,
    ItemNodeComponent,
    // LoginComponent,
    InsertNodeComponent,
    AddItemListComponent,
    LoginComponent,
    RegisterComponent,
    MainLayoutComponent,
    DemoComponent,
    CustomerDetailComponent,
    CustomerdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

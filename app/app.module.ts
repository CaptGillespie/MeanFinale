import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component'
import { InfoComponent } from './info/info.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReviewComponent } from './review/review.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    InfoComponent,
    CreateComponent,
    UpdateComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ReviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

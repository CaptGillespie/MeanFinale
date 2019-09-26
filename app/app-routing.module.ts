
import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './create/create.component';
import { InfoComponent } from './info/info.component';
import { UpdateComponent } from './update/update.component';
import { ReviewComponent } from './review/review.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  { path: 'products',component: ProductsComponent },
  { path: 'review/:id',component: ReviewComponent },

  { path: 'review/:id',component: InfoComponent },
  
  { path: 'create',component: CreateComponent },
  { path: 'info/:id',component: InfoComponent },
  { path: 'update/:id',component: UpdateComponent },
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

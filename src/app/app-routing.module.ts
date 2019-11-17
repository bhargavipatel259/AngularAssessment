import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchButtonComponent } from './search-button/search-button.component';
import { SearchStockComponent } from './search-stock/search-stock.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'search', component: SearchStockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

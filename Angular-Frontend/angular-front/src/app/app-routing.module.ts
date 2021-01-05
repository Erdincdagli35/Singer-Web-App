import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSingerComponent } from './create-singer/create-singer.component';
import { SingerDetailsComponent } from './singer-details/singer-details.component';
import { SingerListComponent } from './singer-list/singer-list.component';
import { UpdateSingerComponent } from './update-singer/update-singer.component';

const routes: Routes = [
  { path: 'singers', component: SingerListComponent },
  { path: 'create-singer', component: CreateSingerComponent },
  { path: '', redirectTo: 'singers', pathMatch: 'full' },
  { path: 'update-singer/:id', component: UpdateSingerComponent },
  { path: 'singer-details/:id', component: SingerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

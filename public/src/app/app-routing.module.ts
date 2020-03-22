import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { ViewComponent } from './view/view.component';
import { ParentComponent } from './parent/parent.component';
//change Routes according to wireframe.
const routes: Routes = [
  {path:'movies', component:HomeComponent},
  {path:'', pathMatch:'full', redirectTo:'/movies'},
  {path:'movies/new', component:NewComponent},
  {path:'movies/edit/:id', component:EditComponent},
  {path:'movies/:id/review', component:DetailsComponent},
  {path:'movies/:id', component: ViewComponent},
  {path:'parent', component:ParentComponent},
  //star routes go at the bottom!
  { path: '**', component: HomeComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

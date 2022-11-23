import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    component:MasterPageComponent,
    path:'',
    children:[
      {
        component:HomePageComponent,
        path:''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

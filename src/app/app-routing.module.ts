import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
      {
        path: 'details',
        component: DetailsComponent
       
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      },
    
  
  {path: '**', redirectTo:'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  HomePageComponent,
  DetailsComponent
]

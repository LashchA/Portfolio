import { HobbiesComponent } from './hobbies/hobbies.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponentComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'hobbies',
    component: HobbiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

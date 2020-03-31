import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MisinformationComponent} from './misinformation/misinformation.component';
import {ViewMisinformationComponent} from './view-misinformation/view-misinformation.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {BlackmarketingComponent} from './blackmarketing/blackmarketing.component';
import {SuspectedcaseComponent} from './suspectedcase/suspectedcase.component';
import {ViewBlackmarketingComponent} from './view-blackmarketing/view-blackmarketing.component';
import {ViewSuspectedcasesComponent} from './view-suspectedcases/view-suspectedcases.component';
import {VisualizenepalComponent} from './visualizenepal/visualizenepal.component';
import {HomepageComponent} from './homepage/homepage.component';
import {NepalMapComponent} from './nepal-map/nepal-map.component';

const routes: Routes = [
  {path: 'nepalmap', component: NepalMapComponent},
  {path: 'misinformation', component: MisinformationComponent},
  {path: 'getmisinformation', component: ViewMisinformationComponent},
  {path: 'landingpage', component: LandingPageComponent},
  {path: 'blackmarketing', component: BlackmarketingComponent},
  {path: 'suspectedcase', component: SuspectedcaseComponent},
  {path: 'getblackmarketing', component: ViewBlackmarketingComponent},
  {path: 'getsuspectedcase', component: ViewSuspectedcasesComponent},
  {path: 'visualizeNepal', component: VisualizenepalComponent},
  {path: 'homepage', component: HomepageComponent},
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

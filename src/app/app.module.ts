import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MisinformationComponent } from './misinformation/misinformation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViewMisinformationComponent } from './view-misinformation/view-misinformation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SuspectedcaseComponent } from './suspectedcase/suspectedcase.component';
import { BlackmarketingComponent } from './blackmarketing/blackmarketing.component';
import { ViewSuspectedcasesComponent } from './view-suspectedcases/view-suspectedcases.component';
import { ViewBlackmarketingComponent } from './view-blackmarketing/view-blackmarketing.component';
import { VisualizenepalComponent } from './visualizenepal/visualizenepal.component';
import {GoogleChartsModule} from  'angular-google-charts';
import { HomepageComponent } from './homepage/homepage.component';
import { NotificationModule } from './core/notification/notification.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from './core';
import {SharedModule} from './shared';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {NepalMapComponent} from  './nepal-map/nepal-map.component';
import { CoronaFearComponent } from './corona-fear/corona-fear.component';
import { GetcoronaFearComponent } from './getcorona-fear/getcorona-fear.component';
import { VisualizeCoronaFearComponent } from './visualize-corona-fear/visualize-corona-fear.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { AQIvisualizeComponent } from './aqivisualize/aqivisualize.component';
import {FooterComponent} from './footer/footer.component'
import {SearchPipe} from './hospital-list/search.pipe';
import { EssentialsComponent } from './essentials/essentials.component';
import {Essentials} from './essentials/Essentials.pipe';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [AppComponent, MisinformationComponent, ViewMisinformationComponent,
    LandingPageComponent, SuspectedcaseComponent, BlackmarketingComponent,
    ViewSuspectedcasesComponent, ViewBlackmarketingComponent,
    VisualizenepalComponent, HomepageComponent, FooterComponent, NavbarComponent, NepalMapComponent, CoronaFearComponent, GetcoronaFearComponent, VisualizeCoronaFearComponent, HospitalListComponent, AQIvisualizeComponent, SearchPipe, EssentialsComponent, Essentials],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GoogleChartsModule.forRoot(),
    NotificationModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CoreModule,
    SharedModule,
  MatSelectModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

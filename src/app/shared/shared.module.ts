import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { SpinnerComponent } from '../shared/spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonLoaderComponent } from '../shared/button-loader';
import { FormErrorWrapperComponent } from '../shared/form-error-wrapper/form-error-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    SpinnerComponent,
    BreadcrumbComponent,
    BlankComponent,
    FullComponent,
    ButtonLoaderComponent,
    FormErrorWrapperComponent
  ],
  exports: [
    SpinnerComponent,
    BreadcrumbComponent,
    BlankComponent,
    FullComponent,
    ButtonLoaderComponent,
    FormErrorWrapperComponent
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule {}

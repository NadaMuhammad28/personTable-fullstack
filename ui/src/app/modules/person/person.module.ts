import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonTableComponent } from './person-table/person-table.component';


@NgModule({

  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }

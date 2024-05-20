import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonTableComponent } from './person-table/person-table.component';
import { PersonDetailsComponent } from './person-details/person-detailscomponent';

const routes: Routes = [
  { path: '', component: PersonTableComponent },
  { path: 'new', component: PersonFormComponent },
  { path: 'details/:id', component: PersonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule {}

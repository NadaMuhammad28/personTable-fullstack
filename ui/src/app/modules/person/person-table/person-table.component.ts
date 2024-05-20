import { Component, inject } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { PersonService } from '../person.service';
import { AsyncPipe, DatePipe, NgFor } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Observable } from 'rxjs';
import { Person } from '../types/person';
import { Router } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-person-table',
  template: `
    <nz-row nzGutter="16">
      <nz-col nzSpan="24">
        <button nz-button nzType="primary" (click)="onAddNewClick()">
          New
        </button>
      </nz-col>
    </nz-row>
    <nz-table #personTable [nzData]="(allPerson$ | async)!">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Notianl ID</th>
          <th>DOB</th>

          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let person of personTable.data">
          <tr>
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.nationalityID }}</td>
            <td>{{ person.birthDate | date : 'yyyy-MM-dd' }}</td>

            <td>
              <button nz-button (click)="onDetailsClick(person)">
                Details
              </button>
            </td>
          </tr>
        </ng-container>
      </tbody>
    </nz-table>
  `,

  standalone: true,
  imports: [
    NzTableModule,
    AsyncPipe,
    NzDividerModule,
    NzButtonModule,
    NgFor,
    DatePipe,
    NzGridModule,
  ],
})
export class PersonTableComponent {
  personService = inject(PersonService);

  allPerson$: Observable<Person[]> = this.personService.findAll();
  private router = inject(Router);
  onDetailsClick(person: Person) {
    this.personService.setCurrentPerson(person);
    this.router.navigate(['person/details', person.personID]);
  }
  onAddNewClick() {
    this.router.navigate(['person/new']);
  }
}

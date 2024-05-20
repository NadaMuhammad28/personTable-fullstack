import { Component, inject } from '@angular/core';

import { PersonService } from '../person.service';
import { DatePipe, NgIf } from '@angular/common';
import { Person } from '../types/person';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-person-table',
  template: `
    <div *ngIf="person" class="person-details">
      <h2>Person Details</h2>
      <nz-row nzGutter="16">
        <nz-col nzSpan="24">
          <nz-descriptions nzBordered>
            <nz-descriptions-item nzTitle="Name" [nzSpan]="24">{{
              person.name
            }}</nz-descriptions-item>
            <nz-descriptions-item nzTitle="Age" [nzSpan]="24">{{
              person.age
            }}</nz-descriptions-item>
            <nz-descriptions-item nzTitle="Nationality ID" [nzSpan]="24">{{
              person.nationalityID
            }}</nz-descriptions-item>
            <nz-descriptions-item nzTitle="DOB" [nzSpan]="24">{{
              person.birthDate | date : 'yyyy-MM-dd'
            }}</nz-descriptions-item>
          </nz-descriptions>
        </nz-col>
      </nz-row>
      <nz-row nzGutter="16">
        <nz-col nzSpan="24">
          <button nz-button nzType="default" (click)="onBackClick()">
            Back
          </button>
        </nz-col>
      </nz-row>
    </div>
  `,
  standalone: true,
  imports: [NzDescriptionsModule, NgIf, NzButtonModule, DatePipe, NzGridModule],
})
export class PersonDetailsComponent {
  personService = inject(PersonService);
  person: Person | undefined;
  private router = inject(Router);
  ngOnInit(): void {
    this.person = this.personService.getCurrentPerson();
    if (!this.person) this.router.navigate(['/']);
  }
  onBackClick(): void {
    this.router.navigate(['/']);
  }
}

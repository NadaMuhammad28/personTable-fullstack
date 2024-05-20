import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataRepository } from 'src/app/core/services/data-repository.service';
import { Person } from './types/person';
@Injectable({
  providedIn: 'root',
})
export class PersonService extends DataRepository {
  override name: string = '';
  override contextName: string = 'person';
  private currentPerson!: Person;
  addPerson(personData: any) {
    return this.http.post(this.buildEndPoint(), personData);
  }

  setCurrentPerson(person: Person) {
    this.currentPerson = person;
  }
  getCurrentPerson(): Person {
    return this.currentPerson;
  }

  findAll(): Observable<any[]> {
    return this.http
      .get<any>(this.buildEndPoint())
      .pipe(map((res) => res.persons));
  }
}

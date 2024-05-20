import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Form } from 'src/app/core/services/form-base';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { PersonService } from '../person.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  standalone: true,
  imports: [
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzDatePickerModule,
    NzGridModule,
    NzButtonModule,
  ],
})
export class PersonFormComponent extends Form<any> {
  private personService = inject(PersonService);
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      age: [null, Validators.required],
      nationalityID: [null, Validators.required],
      birthDate: [null, Validators.required],
    });
  }

  getErrorMessage(formControlName: string) {
    return '';
  }
  override submit(): void {
    this.personService.addPerson(this.form.value).subscribe((res: any) => {
      if (res.success) {
        this.message.success('Submitted Successfuly!');
        this.router.navigate(['/']);
      }
    });
  }
  cancel() {
    this.router.navigate(['/']);
  }
  ngOnDestroy(): void {

    this.onDestroy()
  }
}

import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

export class Form<T> {
  fb = inject(FormBuilder);
  router = inject(Router);
  message = inject(NzMessageService);
  form!: FormGroup;
  destroy$ = new Subject<void>();

  save() {}

  update() {}

  submit() {}
  prepareOutgoingRequest<S>(formValue: T): S {
    return formValue as unknown as S;
  }

  parseIncomingResponse<R>(response: R): void {}
 onDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

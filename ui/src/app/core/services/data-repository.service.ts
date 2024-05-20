import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/env.dev';
import { inject } from '@angular/core';


export abstract class DataRepository {
http = inject(HttpClient)
  buildEndPoint(): string {
    const context = environment.contexts[this.contextName];
    return [environment.host+ ':'+ context.port, context.prefix || environment.prefix,context.name].join('/');
  }

  abstract name: string;
  abstract contextName: string;
}

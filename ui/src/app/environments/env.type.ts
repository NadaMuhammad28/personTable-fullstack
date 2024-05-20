import { Host } from '@angular/core';

export interface EnvitonmentType {
  host: string;
  prefix: string;
  contexts: Context;
}

export interface Context {
  [index: string]: { port: number; name: string; prefix?: string };
}

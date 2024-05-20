import { EnvitonmentType } from './env.type';

export const environment: EnvitonmentType = {
  host: ' http://localhost',
prefix:'api',
   contexts: {
    person: {
      port: 3000,
      name: 'person',
    },
  },
};

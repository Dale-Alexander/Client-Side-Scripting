import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Calculator } from './app/calculator/calculator';

bootstrapApplication(Calculator, appConfig)
  .catch((err) => console.error(err));

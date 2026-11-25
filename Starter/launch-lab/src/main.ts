import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { WelcomePanel } from './app/welcome-panel/welcome-panel';

bootstrapApplication(WelcomePanel, appConfig)
  .catch((err) => console.error(err));

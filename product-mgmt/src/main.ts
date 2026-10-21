import { appConfig } from './app/app.config';
// Remove the old broken line and replace it with this:
import { bootstrapApplication } from '@angular/platform-browser'; 

import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { Calculator } from './app/calculator/calculator';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(Calculator, config, context);

export default bootstrap;

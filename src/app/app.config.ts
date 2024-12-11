import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import provideHttpClient and withFetch

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
              provideZoneChangeDetection({ eventCoalescing: true }), 
              provideRouter(routes), 
              provideHttpClient(withFetch())
             ] 

};

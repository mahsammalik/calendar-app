import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { provideHttpClient } from '@angular/common/http';
import { provideForms, withForms } from '@angular/forms';

import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideClientHydration(),
    provideHttpClient(),
    provideForms(withForms()),
    provideClientHydration(), 
    provideAnimationsAsync(),
    importProvidersFrom(
      BrowserAnimationsModule,
      MatButtonModule,
      MatDialogModule,
      MatInputModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      DragDropModule
    )
  ]
};

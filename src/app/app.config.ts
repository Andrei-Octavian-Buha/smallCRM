import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
     provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyC1HW49BkEfP0xufKEEtNM9-dqpoM_uEFM",
      authDomain: "smallcrm-b731e.firebaseapp.com",
      projectId: "smallcrm-b731e",
      storageBucket: "smallcrm-b731e.firebasestorage.app",
      messagingSenderId: "290560575395",
      appId: "1:290560575395:web:0464c26b114e73b9b6fc16"
     })),
    provideFirestore(() => getFirestore()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};

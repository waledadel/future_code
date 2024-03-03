import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp  } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { routes } from './app.routes';
import { firebaseConfig } from '../firebase-config';
import { FirestoreService } from './shared/services/firestore.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      // provideAuth(() => getAuth()),
      // provideFirestore(() => getFirestore()),
      // provideStorage(() => getStorage())

      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
      AngularFireModule.initializeApp(firebaseConfig),
    )
  ]
};

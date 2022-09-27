import { FirebaseConfig } from './app/configs/firebase';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// firebase related
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Initialize Firebase
const app = initializeApp(FirebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

document.addEventListener('touchmove', function(event) {
    event = event.originalEvent || event;
    if (event.scale !== 1) {
       event.preventDefault();
    }
}, false);

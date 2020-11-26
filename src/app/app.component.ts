import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PoC Arquitetura Front end';
  constructor(router: Router) {
    const nav = router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    );
    nav.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-5K53TF46P0', {
        'page_path': event.urlAfterRedirects
      });
    })
  }
}

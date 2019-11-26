import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';

export const appRoutes: Routes = [
    { path: 'intro', component: IntroComponent },

    { path: '',
      redirectTo: '/intro',
      pathMatch: 'full'
    }
    // { path: '**', component: PageNotFoundComponent }
  ];